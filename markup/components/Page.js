const ComposedExample = require('./ComposedExample');
const Heading = require('./Heading');
const Section = require('./Section');

const getComponentPart = part => `
    ${Heading({
        componentName: part.name,
        themes: part.themes,
    })}
    ${Section({
        markup: part.markup,
        atRules: part.atRules,
        classes: part.classes,
        mixedStates: part.mixedStates,
        name: part.name,
        pseudoStates: part.pseudoStates,
        states: part.states,
        tagName: part.tagName,
    })}
`;

function getGroupsFromModifiers(modifiers) {
    const families = {};

    Object.keys(modifiers).forEach(key => {
        const modifier = modifiers[key];
        const family = modifier.atRules['family'] || 'chainable';
        families[family] = families[family] ? families[family] : [];
        families[family].push(modifier);
    });

    return families;
}

module.exports = component => {
    const modifiers = Object.keys(component.modifiers).map(m => component.modifiers[m]);
    const elements = Object.keys(component.elements).map(e => component.elements[e]);
    const families = getGroupsFromModifiers(component.modifiers);

    const modifiersMarkup = Object.keys(families).map(key => {
        return `
            <div class="bemagic-page__title">${key} variations</div>
            ${families[key].map(variation => {
                return getComponentPart(variation);
            }).join('')}
        `;
    }).join('');

    return `
        <div
            class="bemagic-app__page bemagic-page js-page js-${component.classes}"
            data-page="${component.name}"
        >
            ${ComposedExample({
                name: component.name,
                derivedExample: component.derivedExample,
            })}
            ${getComponentPart(component)}
            ${modifiersMarkup}
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
};
