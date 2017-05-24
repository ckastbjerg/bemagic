const getElementMarkup = require('../utils/getElementMarkup');

module.exports = function(components) {
    Object.keys(components).forEach(componentName => {
        const component = components[componentName];
        component.markup = getElementMarkup({
            atRules: component.atRules,
            blockName: componentName,
            tagName: component.tagName,
        });

        Object.keys(component.elements).forEach(elementName => {
            const element = component.elements[elementName];
            element.markup = getElementMarkup({
                atRules: element.atRules,
                blockName: componentName,
                elementName,
                tagName: element.tagName,
            });

            Object.keys(element.modifiers).forEach(modifierName => {
                const modifier = element.modifiers[modifierName];
                modifier.markup = getElementMarkup({
                    atRules: modifier.atRules,
                    blockName: componentName,
                    elementName,
                    modifierName,
                    tagName: element.tagName,
                });
            });
        });

        Object.keys(component.modifiers).forEach(modifierName => {
            const modifier = component.modifiers[modifierName];
            modifier.markup = getElementMarkup({
                atRules: modifier.atRules,
                blockName: componentName,
                modifierName,
                tagName: component.tagName,
            });
        });
    });

    return components;
};
