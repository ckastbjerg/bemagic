const oneLine = require('common-tags/lib/oneLine');

const utils = require('../utils');
const constants = require('../constants');

module.exports = ({ tagName, name, states = [], type }) => {
    if (typeof name !== 'string') {
        throw new Error('Parameter `name` must be a string');
    }

    return oneLine`
        | **[\`${name}\`](#${name})**
        | [${type}](${constants.CONVENTIONS_PATH}#${type}s)
        | ${states.length > 0 ? utils.listString({ list: states }) : 'None'}
        | ${tagName || 'N/A'} |
    ` + '\n';
};
