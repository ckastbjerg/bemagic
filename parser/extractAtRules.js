'use strict';

const chalk = require('chalk');
const utils = require('./utils');

module.exports = function(config, comment, components) {
    const text = comment.text;

    if (!comment.next()) {
        console.error(chalk.yellow(`\n@bemagic: Couldn't match this comment to a selector:`));
        console.error(`\n${text}`);
    } else if (text.match(/@bemagic/)) {
        const selector = comment.next().selector;
        const componentName = utils.getComponentName(config, selector);
        const descendantName = utils.getDescendantName(selector);
        const modifierName = utils.getModifierName(selector);
        const stateName = utils.getStateName(selector);
        const lines = text.split('\n');
        const atRules = {};

        lines.forEach(function(line) {
            let prop = line.split(/:/)[0].replace(/:/, '');
            let val = line.split(/:/)[1];

            if (prop && val) {
                prop = prop.replace(',', '').trim();
                val = val.replace(',', '').trim();
                // convert none to null...
                atRules[prop] = val === '\'\'' ? '' : val;
            }

            if (descendantName) {
                if (modifierName) {
                    components[componentName].descendants[descendantName].modifiers[modifierName].atRules = atRules;
                } else {
                    components[componentName].descendants[descendantName].atRules = atRules;
                }
            } else if (modifierName) {
                components[componentName].modifiers[modifierName].atRules = atRules;
            } else if (stateName) {
                components[componentName].states[stateName].atRules = atRules;
            } else {
                components[componentName].atRules = atRules;
            }
        });
    }
};
