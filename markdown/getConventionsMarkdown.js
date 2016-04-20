'use strict';

const fs = require('fs');

const getCurrentDate = require('../utils/getCurrentDate');

module.exports = function(config, components) {
    let markdown;

    try {
        markdown = fs.readFileSync(__dirname + '/templates/GUIDELINES.md', 'utf-8');
    } catch (e) {
        console.error(e);
    }

    markdown = markdown.replace(/{{NAME}}/g, config.name);
    markdown = markdown.replace(/{{NAMESPACE}}/g, config.namespace);
    markdown = markdown.replace(/{{THEMECLASS}}/g, config.themeClass);
    markdown = markdown.replace(/{{GENERATED_AT}}/g, getCurrentDate());
    markdown = markdown.replace(/{{NUM_COMPONENTS}}/g, Object.keys(components).length);

    return markdown;
};
