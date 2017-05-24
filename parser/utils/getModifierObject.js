const getElementClass = require('../../utils/getElementClass');

module.exports = function({
    blockName = null,
    elementName = null,
    modifierName = null,
}) {
    if (!blockName) { throw new Error('Missing argument: blockName'); }
    if (!modifierName) { throw new Error('Missing argument: modifierName');}

    return {
        atRules: {},
        mixedStates: {},
        name: modifierName,
        classes: getElementClass({ blockName, elementName, modifierName }),
        markup: null,
        pseudoStates: {},
        states: {},
        tagName: null,
        themes: {},
    };
};
