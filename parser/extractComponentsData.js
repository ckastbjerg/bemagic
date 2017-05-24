const getBlockName = require('./utils/getBlockName');
const getBlockObject = require('./utils/getBlockObject');
const getBlockSelector = require('./utils/getBlockSelector');
const getElementName = require('./utils/getElementName');
const getElementObject = require('./utils/getElementObject');
const getMixedStateObject = require('./utils/getMixedStateObject');
const getModifierName = require('./utils/getModifierName');
const getModifierObject = require('./utils/getModifierObject');
const getPseudoStateName = require('./utils/getPseudoStateName');
const getShouldIgnoreSelector = require('./utils/getShouldIgnoreSelector');
const getStateName = require('./utils/getStateName');
const getStateObject = require('./utils/getStateObject');
const getThemeName = require('./utils/getThemeName');
const getThemeObject = require('./utils/getThemeObject');
const getCustomMarkup = require('./utils/getCustomMarkup');

function setStates({
    object,
    stateName,
    pseudoStateName,
    mixedStateName,
}) {
    if (stateName && pseudoStateName) {
        object.mixedStates[mixedStateName] = getMixedStateObject({ stateName, pseudoStateName });
    } else if (stateName) {
        object.states[stateName] = getStateObject(stateName);
    } else if (pseudoStateName) {
        object.pseudoStates[pseudoStateName] = pseudoStateName;
    }
}

module.exports = function({
    selector = null,
    components = null,
}) {
    if (!selector) { throw new Error('Missing argument: selector'); }
    if (!components) { throw new Error('Missing argument: components'); }
    if (getShouldIgnoreSelector(selector)) { return; }

    let isThemingUsed = false;
    const blockClass = getBlockSelector(selector);
    const blockName = getBlockName(blockClass);

    if (!blockName) {
        return;
    }

    const elementName = getElementName(blockClass);
    const modifierName = getModifierName(blockClass);
    const stateName = getStateName(blockClass);
    const pseudoStateName = getPseudoStateName(blockClass);
    const themeName = getThemeName(selector);
    const mixedStateName = stateName + pseudoStateName;
    const customMarkup = getCustomMarkup({ blockName, components });
    const component = getBlockObject({ blockName, customMarkup });

    function setTheming(part) {
        if (themeName && !isThemingUsed) {
            isThemingUsed = true;
            part.themes[themeName] = getThemeObject(themeName);
        }
    }

    if (elementName) {
        const element = getElementObject({ blockName, elementName });

        if (modifierName) {
            const modifier = getModifierObject({ blockName, modifierName, elementName });
            setStates({ object: modifier, stateName, pseudoStateName, mixedStateName });
            setTheming(modifier);
            element.modifiers[modifierName] = modifier;
        } else {
            setStates({ object: element, stateName, pseudoStateName, mixedStateName });
        }

        setTheming(element);
        component.elements[elementName] = element;
    } else if (modifierName) {
        const modifier = getModifierObject({ blockName, modifierName });
        setStates({ object: modifier, stateName, pseudoStateName, mixedStateName });
        setTheming(modifier);
        component.modifiers[modifierName] = modifier;
    } else {
        setStates({ object: component, stateName, pseudoStateName, mixedStateName });
    }

    setTheming(component);

    return component;
};
