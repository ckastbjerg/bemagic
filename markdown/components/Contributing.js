const constants = require('../constants');
const utils = require('../utils');

module.exports = () => {
    return `
        ${utils.sectionTitle('Contributing')};
        ${utils.description(`
            Please view the **[contribution guidelines](${constants.CONVENTIONS_PATH})** before
            modifying this component
        `)}
    `;
};
