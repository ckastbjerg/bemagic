'use strict';

const chalk = require('chalk');
const chokidar = require('chokidar');
const express = require('express');
const fs = require('fs');
const http = require('http');
const pseudoclasses = require('rework-pseudo-classes');
const rework = require('rework');
const socketIo = require('socket.io');

const parser = require('./parser/index');
const markdowner = require('./markdown/index');
const markupper = require('./markup/index');
const lintComponents = require('./linter/lintComponents');
const defaultConfig = require('./config.js');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get(['/*'], function(req, res) {
    res.sendFile(__dirname + req.originalUrl);
});

function getCss(filePath) {
    var css = fs.readFileSync(filePath, 'utf-8');

    var reworkedCss = rework(css).use(pseudoclasses({
        blacklist: [],
        allCombinations: true }))
    .toString();

    return reworkedCss;
}

module.exports.run = function(options) {
    options = options || {};

    if (!options.file || !options){
        throw('not invoked with required parameters');
    }

    const userConfig = options.config ? require(options.config) : {};
    const config = Object.assign(defaultConfig, userConfig);
    const componentsPath = fs.realpathSync(config.componentsFolder);
    const watcher = chokidar.watch([`${componentsPath}/**/*.html`, options.file], {persistent: true});

    io.on('connection', function (socket) {
        function build() {
            const css = getCss(options.file);

            parser(config, css).then(function(data) {
                if (config.strict) {
                    lintComponents(data.components);
                }

                if (config.componentsFolder) {
                    markdowner(config, css, data.components);
                }
                const markup = markupper(config, css, data);
                socket.emit('data', markup);
            });
        }

        build();
        watcher.on('change', function() {
            build();
        });
    });

    console.log('');
    console.log('     (\\.   \\      ,/)         /                        /                  ');
    console.log('      \\(   |\\     )/         (___  ___  _ _  ___  ___    ___              ');
    console.log('      //\\  | \\   /\\\\         |   )|___)| | )|   )|   )| |               ');
    console.log('     (/ /\\_#oo#_/\\ \\)        |__/ |__  |  / |__/||__/ | |__              ');
    console.log('      \\/\\  ####  /\\/                             __/                     ');
    console.log("           '##'                                                             ");
    console.log('-------------------------------------------------------------------------------------');
    console.log(`     (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Watch the magic happen at ${chalk.green('http://localhost:1234')}  `);
    console.log('-------------------------------------------------------------------------------------');
};

server.listen(1234);
