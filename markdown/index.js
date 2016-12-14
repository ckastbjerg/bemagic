'use strict';

const fs = require('fs');

const getComponentsMarkdown = require('./getComponentsMarkdown');
const getComponentMarkdown = require('./getComponentMarkdown');
const getConventionsMarkdown = require('./getConventionsMarkdown');

module.exports = function(css, components) {
    const config = global.config;
    components = components || {};

    if (!config.componentsFolder) {
        console.error('Required option `componentsFolder` not provided');
        return;
    }

    const componentsFolder = fs.realpathSync(config.componentsFolder);
    const componentsMarkdown = getComponentsMarkdown(components);
    const conventionsMarkdown = getConventionsMarkdown(components);

    Object.keys(components).forEach(function(componentName) {
        let template;
        try {
            template = fs.readFileSync(`${componentsFolder}/${componentName}/bemagic.html`, 'utf-8');
        } catch (e) {
            // console.log('Error:', e);
        }

        const markdown = getComponentMarkdown(components[componentName], template);
        try {
            fs.writeFileSync(`${componentsFolder}/${componentName}/README.md`, markdown);
        } catch (e) {
            console.log('Could not save README.md for', componentName);
            console.log('Error:', e);
        }
    });

    fs.writeFileSync(`${componentsFolder}/README.md`, componentsMarkdown);
    fs.writeFileSync(`${componentsFolder}/CONVENTIONS.md`, conventionsMarkdown);
};
