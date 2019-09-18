module.exports = obj => {
    const errors = [];

    if (!obj.atRules || !obj.atRules.description) {
        errors.push(new Error(`
            ${obj.name} has no \`description\`. 
            All classes must have a description when using bemagic's \`strict\` mode.

            Classes:
            ${JSON.stringify(obj.classes)}
        `));
    }

    if (obj.elements && !obj.atRules.intro) {
        errors.push(new Error(`
            ${obj.name} has no \`intro\`. 
            All component base classes must have an intro when using bemagic's \`strict\` mode.

            Classes:
            ${JSON.stringify(obj.classes)}
        `));
    }

    return errors.length > 0 ? errors : null;
};
