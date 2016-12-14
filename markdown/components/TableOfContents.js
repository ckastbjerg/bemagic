const utils = require('../utils');

module.exports = ({
    hasThemes = false,
    hasModifiers = false,
    hasStates = false,
    hasElements = false,
}) => {
    return `
        ###### Table of contents
        ${hasThemes ? utils.menuItem('theming') : ''}
        ${hasModifiers ? utils.menuItem('modifiers') : ''}
        ${hasStates ? utils.menuItem('states') : ''}
        ${hasElements ? utils.menuItem('elements') : ''}
        ${utils.menuItem('component overview')}
        ${utils.menuItem('contributing')}
    `;
};
