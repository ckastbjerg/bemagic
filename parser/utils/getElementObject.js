const getElementClass = require('../../utils/getElementClass');
const getElementMarkup = require('../../utils/getElementMarkup');
const getTag = require('../../utils/getTag');

module.exports = function({
    blockName = null,
    elementName = null,
}) {
    if (!blockName) { throw(new Error('Missing argument: blockName')); }
    if (!elementName) { throw(new Error('Missing argument: elementName'));}

    const config = global.config;
    const prefix = config.namespace ? `${config.namespace}-` : '';

    return {
        atRules: {},
        mixedStates: {},
        modifiers: {},
        name: elementName,
        classes: getElementClass({
            blockName: `${prefix}${blockName}`,
            elementName: elementName,
        }),
        markup: getElementMarkup({
            blockName: `${prefix}${blockName}`,
            elementName: elementName,
            tagName: getTag({
                blockName: elementName,
            }),
        }),
        pseudoStates: {},
        states: {},
        tagName: getTag({
            blockName: elementName,
        }),
        themes: {},
    };
};
