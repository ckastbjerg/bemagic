const getTag = require('../utils/getTag');

module.exports = function(components) {
    Object.keys(components).forEach(componentName => {
        const component = components[componentName];
        component.tagName = getTag(component);

        Object.keys(component.elements).forEach(elementName => {
            const element = component.elements[elementName];
            element.tagName = getTag(element);

            Object.keys(element.modifiers).forEach(modifierName => {
                const modifier = element.modifiers[modifierName];
                modifier.tagName = getTag(modifier);
            });
        });

        Object.keys(component.modifiers).forEach(modifierName => {
            const modifier = component.modifiers[modifierName];
            modifier.tagName = getTag(modifier);
        });
    });

    return components;
};
