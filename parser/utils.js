'use strict';

const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';

const getElementClass = require('../utils/getElementClass');
const getElementMarkup = require('../utils/getElementMarkup');
const getTag = require('../utils/getTag');

const getAdvancedMarkup = require('../markup/utils');

module.exports.getComponentName = function(config, rule) {
    const regExp = new RegExp(WORD);
    return rule.match(regExp)
        ? rule.match(regExp)[0].replace(`${config.namespace}-`, '')
        : null;
};

module.exports.getDescendantName = function(rule) {
    const regExp = new RegExp('__(' + WORD + ')');
    return rule.match(regExp) ? rule.match(regExp)[1] : null;
};

module.exports.getModifierName = function(config, rule) {
    if (!rule) return;
    // E.g. .prefix-background.prefix-theme--inverse shouldn't be considered part of
    // prefix-background component
    const ChainedThemeClass = rule.split('.')[2] || '';
    if (ChainedThemeClass.indexOf(config.themeClass) !== -1) {
        return null;
    }

    const regExp = new RegExp(WORD + '--(' + WORD + ')');
    return rule.match(regExp) ? rule.match(regExp)[1] : null;
};

module.exports.getPseudoStateName = function(rule) {
    const regExp = new RegExp('pseudo-(' + WORD + ')');
    return rule.match(regExp) ? rule.match(regExp)[1] : null;
};

module.exports.getStateName = function(rule) {
    const regExp = new RegExp('is-(' + WORD + ')');
    return rule.match(regExp) ? rule.match(regExp)[1] : null;
};

module.exports.getThemeName = function(config, rule) {
    const regExp = new RegExp(`${config.namespace}-${config.themeClass}--(${WORD})`);
    return rule.match(regExp) ? rule.match(regExp)[1] : null;
};

module.exports.getComponentObject = function(config, componentName, className, customMarkup) {
    return {
        atRules: {},
        descendants: {},
        mixedStates: {},
        modifiers: {},
        name: componentName,
        classes: getElementClass({
            component: `${config.namespace}-${componentName}`,
        }),
        markup: getElementMarkup({
            component: `${config.namespace}-${componentName}`,
            tag: getTag(componentName),
        }),
        customMarkup: customMarkup,
        pseudoStates: {},
        states: {},
        tagName: module.exports.getTag(config, componentName),
        themes: {},
    };
};

module.exports.getDescendantObject = function(config, componentName, descendantName) {
    return {
        atRules: {},
        mixedStates: {},
        modifiers: {},
        name: descendantName,
        classes: getElementClass({
            component: `${config.namespace}-${componentName}`,
            element: descendantName,
        }),
        markup: getElementMarkup({
            component: `${config.namespace}-${componentName}`,
            element: descendantName,
            tag: getTag(descendantName),
        }),
        pseudoStates: {},
        states: {},
        tagName: module.exports.getTag(config, descendantName),
        themes: {},
    };
};

// modifierName is optional
module.exports.getModifierObject = function(config, componentName, modifierName, descendantName) {
    return {
        atRules: {},
        mixedStates: {},
        name: modifierName,
        classes: getElementClass({
            component: `${config.namespace}-${componentName}`,
            element: descendantName,
            modifier: modifierName,
        }),
        markup: getElementMarkup({
            component: `${config.namespace}-${componentName}`,
            element: descendantName,
            modifier: modifierName,
            tag: getTag(descendantName),
        }),
        pseudoStates: {},
        states: {},
        tagName: module.exports.getTag(config, modifierName),
        themes: {},
    };
};

module.exports.getMixedStateObject = function(stateName, pseudoStateName) {
    return {
        atRules: {},
        pseudo: pseudoStateName,
        state: stateName,
    };
};

module.exports.getStateObject = function(stateName) {
    return {
        atRules: {},
        name: stateName,
    };
};

module.exports.getThemeObject = function(config, themeName) {
    return {
        name: themeName,
        classes: getElementClass({
            component: `${config.namespace}-${config.themeClass}`,
            modifier: themeName,
        }),
    };
};

// Returns string. Either 1. user-specified tag, or 2. tag from config file, 3. div
module.exports.getTag = function(config, componentName) {
    let tag = 'div';

    if (config.tags[componentName]) {
        tag = config.tags[componentName];
    }

    if (tag === 'a') {
        tag += ' href="#"';
    }

    return tag;
};
