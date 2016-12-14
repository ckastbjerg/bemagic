const getElementClass = require('../../utils/getElementClass');
const getElementMarkup = require('../../utils/getElementMarkup');
const getTag = require('../../utils/getTag');

module.exports = function({
    blockName = null,
    elementName = null,
    modifierName = null,
}) {
    if (!blockName) { throw new Error('Missing argument: blockName'); }
    if (!modifierName) { throw new Error('Missing argument: modifierName');}

    const config = global.config;
    const prefix = config.namespace ? `${config.namespace}-` : '';

    return {
        atRules: {},
        mixedStates: {},
        name: modifierName,
        classes: getElementClass({
            blockName: `${prefix}${blockName}`,
            elementName,
            modifierName,
        }),
        markup: getElementMarkup({
            blockName: `${prefix}${blockName}`,
            elementName,
            modifierName,
            tagName: getTag({
                blockName: elementName || blockName,
            }),
        }),
        pseudoStates: {},
        states: {},
        tagName: getTag({
            blockName: modifierName,
        }),
        themes: {},
    };
};
