const getElementClass = require('../../utils/getElementClass');
const getElementMarkup = require('../../utils/getElementMarkup');
const getTag = require('../../utils/getTag');

module.exports = function({
    blockName = null,
    customMarkup = null,
}) {
    if (!blockName) {
        throw new Error('Missing argument: blockName');
    }

    const config = global.config;
    const prefix = config.namespace ? `${config.namespace}-` : '';

    return {
        atRules: {},
        elements: {},
        mixedStates: {},
        modifiers: {},
        name: blockName,
        classes: getElementClass({
            blockName: `${prefix}${blockName}`,
        }),
        markup: getElementMarkup({
            blockName: `${prefix}${blockName}`,
            tagName: getTag({
                blockName: blockName,
            }),
        }),
        customMarkup: customMarkup,
        pseudoStates: {},
        states: {},
        tagName: getTag({
            blockName: blockName,
        }),
        themes: {},
    };
};
