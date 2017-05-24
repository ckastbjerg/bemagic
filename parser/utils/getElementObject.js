const getElementClass = require('../../utils/getElementClass');

module.exports = function({
    blockName = null,
    elementName = null,
}) {
    if (!blockName) { throw(new Error('Missing argument: blockName')); }
    if (!elementName) { throw(new Error('Missing argument: elementName'));}

    return {
        atRules: {},
        mixedStates: {},
        modifiers: {},
        name: elementName,
        classes: getElementClass({ blockName, elementName }),
        markup: null,
        pseudoStates: {},
        states: {},
        tagName: null,
        themes: {},
    };
};
