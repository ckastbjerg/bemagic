'use strict';

const stripIndents = require('common-tags/lib/stripIndents');

const getComponentTemplateFile = require('../../utils/getComponentTemplateFile');

const TitleAndIntro = require('./TitleAndIntro');
const TableOfContents = require('./TableOfContents');
const Usage = require('./Usage');
const Theming = require('./Theming');
const Info = require('./Info');
const Overview = require('./Overview');
const ClassDetails = require('./ClassDetails');
const Contributing = require('./Contributing');

module.exports = component => {
    const exampleMarkup = getComponentTemplateFile(component.name);

    return stripIndents`
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
            classes: component.classes,
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
            markup: component.markup,
            name: component.name,
            states: Object.keys(component.pseudoStates),
            themes: Object.keys(component.themes),
        })}
        ${Object.keys(component.modifiers).map(modifierName => {
            const modifier = component.modifiers[modifierName];

            return ClassDetails({
                atRules: modifier.atRules,
                markup: modifier.markup,
                name: modifier.name,
                states: Object.keys(modifier.pseudoStates),
                themes: Object.keys(modifier.themes),
            });
        }).join('')}
        ${Object.keys(component.elements).map(elementName => {
            const element = component.elements[elementName];

            const e = ClassDetails({
                atRules: element.atRules,
                markup: element.markup,
                name: element.name,
                states: Object.keys(element.pseudoStates),
                themes: Object.keys(element.themes),
            });

            const m = Object.keys(element.modifiers).map(modifierName => {
                const modifier = element.modifiers[modifierName];

                return ClassDetails({
                    atRules: modifier.atRules,
                    markup: modifier.markup,
                    name: modifier.name,
                    states: Object.keys(modifier.pseudoStates),
                    themes: Object.keys(modifier.themes),
                });
            });

            return `
                ${e}
                ${m}
            `;
        }).join('')}
        ${Contributing()}
    `;
};
