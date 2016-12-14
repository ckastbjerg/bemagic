const fs = require('fs');

module.exports = function(componentName) {
    const config = global.config;
    if (!config.componentsFolder) {
        return null;
    }

    const componentsPath = fs.realpathSync(config.componentsFolder);
    let template;
    try {
        template = fs.readFileSync(`${componentsPath}/${componentName}/bemagic.html`, 'utf-8');
    } catch (e) {
        // console.log('Error:', e);
    }

    return template;
};
