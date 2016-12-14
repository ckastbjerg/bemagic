'use strict';

const getElementClass = require('./getElementClass');

module.exports = function({
    attributes = null,
    blockName = null,
    children = null,
    elementName = null,
    modifierName = null,
    stateName = null,
    tagName = null,
}) {
    if (!blockName) {
        throw new Error('Missing required argument: blockName');
    }

    const classes = getElementClass({ blockName, elementName, modifierName, stateName });
    const attrs = attributes ? ` ${attributes}` : '';
    const tag = tagName || 'div';
    const innerHtml = children || '…';

    return `<${tag}${attrs} class="${classes}">${innerHtml}</${tag}>`;
};
