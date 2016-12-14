const utils = require('../utils');
const constants = require('../constants');

module.exports = ({
    tagName,
    classes,
    states = [],
    type,
}) => {
    if (typeof classes !== 'string') {
        throw new Error('Parameter `classes` must be a string');
    }

    return `
        | **[\`${classes}\`](#${classes.replace(/ /g, '')})**
        | [${type}](${constants.CONVENTIONS_PATH}#${type}s)
        | ${states.length > 0 ? utils.listString({ list: states }) : 'None'}
        | ${tagName || 'N/A'}
    `;
};
