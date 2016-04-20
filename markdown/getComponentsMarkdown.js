'use strict';

const fs = require('fs');

function getTableOfContent(components) {
    let TOC = '';

    components.forEach(function(name, i) {
        TOC += `${i+1}. [${name}](${name})\n`;
    });

    return TOC;
}

module.exports = function(config, components) {
    let markdown;

    try {
        markdown = fs.readFileSync(__dirname + '/templates/components.md', 'utf-8');
    } catch (e) {
        console.error(e);
    }

    const TOC = getTableOfContent(Object.keys(components));

    markdown = markdown.replace(/{{NAME}}/g, config.name);
    markdown = markdown.replace(/{{NUM_COMPONENTS}}/g, Object.keys(components).length);
    markdown = markdown.replace(/{{COMPONENTS_TOC}}/g, TOC);

    return markdown;
};
