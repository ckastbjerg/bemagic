const utils = require('../utils');

module.exports = ({
    componentName,
    componentClasses,
    intro,
}) => {
    return `
        ${utils.title({
            name: componentName,
            classes: componentClasses }
        )}
        ${intro ? `> ${intro}` : ''}
    `;
};
