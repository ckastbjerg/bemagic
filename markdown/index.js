'use strict';

const fs = require('fs');

const getComponentsMarkdown = require('./getComponentsMarkdown');
const getComponentMarkdown = require('./getComponentMarkdown');
const getConventionsMarkdown = require('./getConventionsMarkdown');

module.exports = function(config, css, components) {
    components = components || {};

    if (!config.componentsFolder) {
        console.error('Required option `componentsFolder` not provided');
        return;
    }

    const outputPath = fs.realpathSync(config.componentsFolder);
    const componentsMarkdown = getComponentsMarkdown(config, components);
    const conventionsMarkdown = getConventionsMarkdown(config, components);

    Object.keys(components).forEach(function(componentName) {
        let template;
        try {
            template = fs.readFileSync(`${outputPath}/${componentName}/bemagic.html`, 'utf-8');
        } catch (e) {
            // console.log('Error:', e);
        }

        const markdown = getComponentMarkdown(config, components[componentName], template);
        try {
            fs.writeFileSync(`${outputPath}/${componentName}/README.md`, markdown);
        } catch (e) {
            console.log('Could not save README.md for', componentName);
            console.log('Error:', e);
        }
    });

    fs.writeFileSync(`${outputPath}/README.md`, componentsMarkdown);
    fs.writeFileSync(`${outputPath}/CONVENTIONS.md`, conventionsMarkdown);
};
