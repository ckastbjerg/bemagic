const utils = require('../utils');
const constants = require('../constants');

const ClassTable = require('./ClassTable');

//
// part - modifiers, elements, states
// type - modifier, element, state
module.exports = ({ part, type, componentName }) => {
    const keys = Object.keys(part);
    if (!keys.length > 0) {
        return '';
    }

    return `
        ${utils.sectionTitle(type)};
        ${utils.description(`
            The ${componentName} component makes use of
            [\`modifiers\`](${constants.CONVENTIONS_PATH}#modifiers) to alter its appearance
        `)}

        \`\`\`html
        ${part[keys[0]].markup}
        \`\`\`

        #####All component \`${type}\`

        ${ClassTable(part)}
        <sub>See the [Component Overview](#component-overview) for more details</sub>
    `;
};
