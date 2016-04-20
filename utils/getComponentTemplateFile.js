const fs = require('fs');

module.exports = function(componentsPath, componentName) {
    var template;
    try {
        template = fs.readFileSync(`${componentsPath}/${componentName}/bemagic.html`, 'utf-8');
    } catch (e) {
        // console.log('Error:', e);
    }

    return template;
};
