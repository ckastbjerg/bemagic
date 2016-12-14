'use strict';

const TitleAndIntro = require('./components/TitleAndIntro');
const TableOfContents = require('./components/TableOfContents');
const Usage = require('./components/Usage');
const Theming = require('./components/Theming');
const Info = require('./components/Info');
const Overview = require('./components/Overview');
const ClassDetails = require('./components/ClassDetails');
const Contributing = require('./components/Contributing');

module.exports = function({ component, exampleMarkup }) {
    return `
        ${TitleAndIntro({
            componentName: component.name,
            componentClasses: component.classes,
            intro: component.atRules['intro'],
        })}
        ${TableOfContents({
            hasThemes: Object.keys(component.themes).length > 0,
            hasModifiers: Object.keys(component.modifiers).length > 0,
            hasStates: Object.keys(component.states).length > 0,
            hasElements: Object.keys(component.elements).length > 0,
        })}
        ${Usage(exampleMarkup ? exampleMarkup : component.markup)}
        ${Theming({
            classes: 'test',
            tag: component.tagName,
        })}
        ${Info({
            part: component.modifiers,
            type: 'modifier',
            componentName: component.name,
        })}
        ${Info({
            part: component.states,
            type: 'states',
            componentName: component.name,
        })}
        ${Info({
            part: component.elements,
            type: 'elements',
            componentName: component.name,
        })}
        ${Overview(component)}
        ${ClassDetails({
            atRules: component.atRules,
            classes: component.classes,
            markup: component.markup,
            states: Object.keys(component.pseudoStates),
            themes: Object.keys(component.themes),
        })}
        ${Object.keys(component.modifiers).map(modifierName => {
            const modifier = component.modifiers[modifierName];

            return ClassDetails({
                atRules: modifier.atRules,
                classes: modifier.classes,
                markup: modifier.markup,
                states: Object.keys(modifier.pseudoStates),
                themes: Object.keys(modifier.themes),
            });
        })}
        ${Object.keys(component.elements).map(elementName => {
            const element = component.elements[elementName];

            const e = ClassDetails({
                atRules: element.atRules,
                classes: element.classes,
                markup: element.markup,
                states: Object.keys(element.pseudoStates),
                themes: Object.keys(element.themes),
            });

            const m = Object.keys(element.modifiers).map(modifierName => {
                const modifier = component.modifiers[modifierName];

                return ClassDetails({
                    atRules: modifier.atRules,
                    classes: modifier.classes,
                    markup: modifier.markup,
                    states: Object.keys(modifier.pseudoStates),
                    themes: Object.keys(modifier.themes),
                });
            });

            return `
                ${e}
                ${m}
            `;
        })}
        ${Contributing()}
    `;
};
