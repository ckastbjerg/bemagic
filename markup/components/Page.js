const ComposedExample = require('./ComposedExample');
const Heading = require('./Heading');
const Section = require('./Section');

const getComponentPart = part => `
    ${Heading({
        componentName: part.name,
        themes: part.themes,
    })}
    ${Section({
        atRules: part.atRules,
        classes: part.classes,
        mixedStates: part.mixedStates,
        name: part.name,
        pseudoStates: part.pseudoStates,
        states: part.states,
        tagName: part.tagName,
    })}
`;

module.exports = component => `
    <div
        class="bemagic-app__page bemagic-page js-page js-${component.classes}"
        data-page="${component.name}"
    >
        ${ComposedExample(component.name)}
        ${getComponentPart(component)}
        ${Object.keys(component.modifiers).map(modifierKey => {
            return getComponentPart(component.modifiers[modifierKey]);
        }).join('')}
        ${Object.keys(component.elements).map(elementKey => {
            const element = component.elements[elementKey];

            return `
                ${getComponentPart(element)}
                ${Object.keys(element.modifiers).map(modifierKey => {
                    return getComponentPart(element.modifiers[modifierKey]);
                }).join('')}
            `;
        }).join('')}
    </div>
`;
