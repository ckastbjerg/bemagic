'use strict';

const getComponentTemplateFile = require('../utils/getComponentTemplateFile');
const utils = require('./utils');
const excludeRegExp = /pseudo-before|pseudo-after|ms-|moz-|class\*=/g;

/*
 * Returns a component selector stripped from theming classes or null if invalid selector
 * @param {String} selector A CSS selector
 * @param {Object} config The configuration for a bemagic project
 * @return {String|Null}
 */
function getComponentSelector(config, selector) {
    if (!selector.match(/\./) || selector.match(excludeRegExp)) { return; }
    const classSelectors = selector.trim().split(/ /);

    // Investigate use of theming or eligal nesting. Needs cleanup!
    if (classSelectors.length > 1 && utils.getComponentName(config, classSelectors[0]) === config.themeClass) {
        if (classSelectors.length > 2) {
            return;
        } else {
            return classSelectors[1];
        }
    } else if (classSelectors.length > 1) {
        return;
    }

    return classSelectors[0];
}

module.exports = function(config, selector, components) {
    const className = getComponentSelector(config, selector);
    if (!className) { return; }

    const componentName = utils.getComponentName(config, className);
    if (componentName.indexOf(config.cascadeClass) !== -1) {
        return;
    }

    let themingUsed = false;
    const descendantName = utils.getDescendantName(className);
    const modifierName = utils.getModifierName(config, className);
    const stateName = utils.getStateName(className);
    const pseudoStateName = utils.getPseudoStateName(className);
    const themeName = utils.getThemeName(config, selector);
    const mixedStateName = stateName + pseudoStateName;

    if (componentName.indexOf(config.themeClass) !== -1) {
        return;
    }

    let customMarkup;
    if (Object.keys(components).indexOf(componentName) === -1) {
        customMarkup = getComponentTemplateFile(config.componentsFolder, componentName);
    } else {
        customMarkup = components[componentName].customMarkup;
    }

    const component = utils.getComponentObject(config, componentName, className, customMarkup);

    if (descendantName) {
        const descendant = utils.getDescendantObject(config, componentName, descendantName);

        if (modifierName) {
            const modifier = utils.getModifierObject(config, componentName, modifierName, descendantName);

            if (stateName && pseudoStateName) {
                modifier.mixedStates[mixedStateName] = utils.getMixedStateObject(stateName, pseudoStateName);
            } else if (stateName) {
                modifier.states[stateName] = utils.getStateObject(stateName);
            } else if (pseudoStateName) {
                modifier.pseudoStates[pseudoStateName] = pseudoStateName;
            } else {
                descendant.modifiers[modifierName] = modifier;
            }

            if (themeName && !themingUsed) {
                themingUsed = true;
                modifier.themes[themeName] = utils.getThemeObject(config, themeName);
            }

            descendant.modifiers[modifierName] = modifier;
        } else if (stateName && pseudoStateName) {
            descendant.mixedStates[mixedStateName] = utils.getMixedStateObject(stateName, pseudoStateName);
        } else if (stateName) {
            descendant.states[stateName] = utils.getStateObject(stateName);
        } else if (pseudoStateName) {
            descendant.pseudoStates[pseudoStateName] = pseudoStateName;
        }

        if (themeName && !themingUsed) {
            themingUsed = true;
            descendant.themes[themeName] = utils.getThemeObject(config, themeName);
        }

        component.descendants[descendantName] = descendant;
    } else if (modifierName) {
        const modifier = utils.getModifierObject(config, componentName, modifierName);

        if (stateName && pseudoStateName) {
            modifier.mixedStates[mixedStateName] = utils.getMixedStateObject(stateName, pseudoStateName);
        } else if (stateName) {
            modifier.states[stateName] = utils.getStateObject(stateName);
        } else if (pseudoStateName) {
            modifier.pseudoStates[pseudoStateName] = pseudoStateName;
        }

        if (themeName && !themingUsed) {
            themingUsed = true;
            modifier.themes[themeName] = utils.getThemeObject(config, themeName);
        }

        component.modifiers[modifierName] = modifier;
    } else if (stateName && pseudoStateName) {
        component.mixedStates[mixedStateName] = utils.getMixedStateObject(stateName, pseudoStateName);
    } else if (stateName) {
        component.states[stateName] = utils.getStateObject(stateName);
    } else if (pseudoStateName) {
        component.pseudoStates[pseudoStateName] = pseudoStateName;
    }

    if (themeName && !themingUsed) {
        component.themes[themeName] = utils.getThemeObject(config, themeName);
    }

    return component;
};
