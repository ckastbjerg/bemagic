const getComponentTemplateFile = require('../../utils/getComponentTemplateFile');

module.exports = function({
    blockName,
    components,
}) {
    if (!blockName) {
        throw new Error('Missing argument: blockName');
    } else if (!components) {
        throw new Error('Missing argument: components');
    }

    const config = global.config;
    let customMarkup;

    if (config.componentsFolder) {
        if (Object.keys(components).indexOf(blockName) === -1) {
            customMarkup = getComponentTemplateFile(blockName);
        } else {
            customMarkup = components[blockName].customMarkup;
        }
    }

    return customMarkup;
};
