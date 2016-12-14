const constants = require('../constants');
const utils = require('../utils');

module.exports = ({ classes, tag }) => {
    if (typeof classes !== 'string') {
        throw new Error(`Parameter \`classes\` must be a string. Received: ${classes}`);
    } else if (typeof tag !== 'string') {
        throw new Error(`Parameter \`tag\` must be a string. Received: ${tag}`);
    }

    const config = global.config;

    return `
        ${utils.sectionTitle('Theming')}
        The \`${classes}\` supports [\`theming\`](${constants.CONVENTIONS_PATH}) and can change its
        appearance when paired with the \`${config.namespace}-${config.themeClass}\` class.
        Note however, that themes may apply only for parts of the component.

        \`\`\`html
        <${tag} class="${classes} ${config.namespace}-${config.themeClass}">…</${tag}>
        <!-- or using nesting -->
        <div class="${config.namespace}-${config.themeClass}">
            <${tag} class="${classes}">…</${tag}>
        </div>
        \`\`\`
        <sub>See the [Component Overview](#component-overview) for more details.</sub>
    `;
};

