'use strict';

const fs = require('fs');

const Components = require('./Components');
const NamingConventions = require('./NamingConventions');
const Component = require('./components/Component');

module.exports = components => {
    const config = global.config;

    if (!config.componentsFolder) {
        throw new Error('Required option `componentsFolder` not provided');
    }

    const componentsKeys = Object.keys(components);
    const componentsFolder = fs.realpathSync(config.componentsFolder);

    componentsKeys.forEach(componentName => {
        const markdown = Component(components[componentName]);

        fs.writeFile(`${componentsFolder}/${componentName}/README.md`, markdown, error => {
            if (error) {
                console.error(`Could not save README.md for ${componentName}`, error);
                console.error(`Does the folder ${componentsFolder}/${componentName} exist?`);
            }
        });
    });

    fs.writeFile(`${componentsFolder}/README.md`, Components({
        components: componentsKeys,
        systemName: config.name,
    }), error => {
        if (error) {
            console.error('Could not save README.md', error);
            console.error(`Does the folder ${componentsFolder} exist?`);
        }
    });

    fs.writeFile(`${componentsFolder}/CONVENTIONS.md`, NamingConventions({
        systemName: config.name,
        namespace: config.namespace,
        themeClass: config.themeClass,
    }), error => {
        if (error) {
            console.error('Could not save CONVENTIONS.md', error);
            console.error(`Does the folder ${componentsFolder} exist?`);
        }
    });
};
