const chalk = require('chalk');

function validateAtRules(obj) {
    if (!obj.atRules || !obj.atRules.description) {
        console.log(new Error(chalk.red(`${obj.name} has no \`description\`. All classes must have a description when using bemagic's \`strict\` mode.`)));
    }

    if (obj.descendants && !obj.atRules.intro) {
        console.log(new Error(chalk.red(`${obj.name} has no \`intro\`. All component base classes must have an intro when using bemagic's \`strict\` mode.`)));
    }
}

module.exports = function(components) {
    Object.keys(components).forEach(function(componentName) {
        const component = components[componentName];
        validateAtRules(component);

        Object.keys(component.modifiers).forEach(function(modifierName) {
            const modifier = component.modifiers[modifierName];
            validateAtRules(modifier);
        });

        Object.keys(component.descendants).forEach(function(descendantName) {
            const descendant = component.descendants[descendantName];
            validateAtRules(descendant);

            Object.keys(descendant.modifiers).forEach(function(modifierName) {
                validateAtRules(descendant.modifiers[modifierName]);
            });
        });
    });
};
