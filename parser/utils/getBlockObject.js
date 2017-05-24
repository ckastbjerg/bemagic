const getElementClass = require('../../utils/getElementClass');

module.exports = function({
    blockName = null,
    customMarkup = null,
}) {
    if (!blockName) {
        throw new Error('Missing argument: blockName');
    }

    return {
        atRules: {},
        elements: {},
        mixedStates: {},
        modifiers: {},
        name: blockName,
        classes: getElementClass({ blockName }),
        markup: null,
        customMarkup: customMarkup,
        pseudoStates: {},
        states: {},
        tagName: null,
        themes: {},
    };
};
