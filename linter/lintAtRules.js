const chalk = require('chalk');

module.exports = obj => {
    if (!obj.atRules || !obj.atRules.description) {
        console.log(new Error(chalk.red(`${obj.name} has no \`description\`. All classes must have a description when using bemagic's \`strict\` mode.`)));
    }

    if (obj.elements && !obj.atRules.intro) {
        console.log(new Error(chalk.red(`${obj.name} has no \`intro\`. All component base classes must have an intro when using bemagic's \`strict\` mode.`)));
    }
};
