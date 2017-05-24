const chalk = require('chalk');
const stripIndents = require('common-tags/lib/stripIndents');
const lintAtRules = require('./lintAtRules');

module.exports = components => {
    const errors = [];

    Object.keys(components).forEach(componentName => {
        const component = components[componentName];
        const componentErrors = lintAtRules(component);
        componentErrors && errors.push(lintAtRules(component));

        Object.keys(component.modifiers).forEach(modifierName => {
            const modifier = component.modifiers[modifierName];
            const modifierErrors = lintAtRules(modifier);
            modifierErrors && errors.push(lintAtRules(modifier));
        });

        Object.keys(component.elements).forEach(descendantName => {
            const descendant = component.elements[descendantName];
            const descendantErrors = lintAtRules(descendant);
            descendantErrors && errors.push(lintAtRules(descendant));

            Object.keys(descendant.modifiers).forEach(modifierName => {
                const descendantModifier = descendant.modifiers[modifierName];
                const descendantModifierErrors = lintAtRules(descendantModifier);
                descendantModifierErrors && errors.push(lintAtRules(descendantModifier));
            });
        });
    });

    if (errors.length > 0) {
        console.log(chalk.red(stripIndents`

            --- Bemagic errors ------------------------------------------------------

            ${errors.map(error => error).join('\n')}

            ------------------------------------------------------------------------------

        `.trim()));
    }
};
