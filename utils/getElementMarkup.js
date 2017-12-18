'use strict';

const getElementClass = require('./getElementClass');
const getAttributes = require('./getAttributes');

module.exports = function({
    atRules = {},
    blockName = null,
    children = null,
    elementName = null,
    modifierName = null,
    stateName = null,
    tagName = 'div',
}) {
    if (!blockName) {
        throw new Error('Missing required argument: blockName');
    }

    const attributes = getAttributes(atRules);
    const classes = getElementClass({
        blockName,
        elementName,
        modifierName,
        stateName,
    });

    let innerHTML = '';
    if (children) {
        innerHTML = children;
    } else if (atRules.container || atRules.text === '' || tagName === 'input') {
        innerHTML = '';
    } else if (!elementName && !modifierName && !stateName) {
        innerHTML = `Default ${blockName}`;
    } else {
        const element = elementName ? `${elementName} ` : '';
        const modifier = modifierName ? `${modifierName} ` : '';
        const state = stateName ? `${stateName} ` : '';
        innerHTML = `${element}${modifier}${state}${blockName}`;
    }

    return `<${tagName}${attributes} class="${classes}">${innerHTML}</${tagName}>`;
};
