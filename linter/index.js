const lintAtRules = require('./lintAtRules');

module.exports = function(components) {
    Object.keys(components).forEach(function(componentName) {
        const component = components[componentName];
        lintAtRules(component);

        Object.keys(component.modifiers).forEach(function(modifierName) {
            const modifier = component.modifiers[modifierName];
            lintAtRules(modifier);
        });

        Object.keys(component.elements).forEach(function(descendantName) {
            const descendant = component.elements[descendantName];
            lintAtRules(descendant);

            Object.keys(descendant.modifiers).forEach(function(modifierName) {
                lintAtRules(descendant.modifiers[modifierName]);
            });
        });
    });
};
