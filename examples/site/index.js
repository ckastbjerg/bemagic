const fs = require('fs');
const util = require('util');
const parser = require('../../parser/index');

// config
const defaultConfig = require('../../config');
const customConfig = require('../bemagic.config');
const config = Object.assign(defaultConfig, customConfig);

// css
var css = fs.readFileSync('../dist/index.css', 'utf-8');
parser(config, css).then(function(data) {
    console.log(util.inspect(data, {showHidden: false, depth: null}));
});
