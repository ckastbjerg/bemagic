const constants = require('../constants');
const utils = require('../utils');

module.exports = ({
    atRules,
    name,
    markup,
    states,
    themes,
}) => {
    const stateInfo = states.length > 0
        ? `The component will react to ${utils.listString({ list: states })} states`
        : '';

    const description = atRules['description']
        ? `> ${(atRules['description'])}`
        : '*This class could use a description...*';

    return `
        <a name=${name.replace(/ /g, '')}></a>
        #### \`${name}\` ${atRules['mandatory'] ? '(mandatory)' : ''}
        ${description}
        ${markup}
        Elements using this class will change appearance when used inside [theme]
        (${constants.CONVENTIONS_PATH}#theming) ${utils.listString({
            list: themes,
            word: 'or',
        })}
        ${stateInfo}
        ###### Specifications

        ${Object.keys(atRules).map(rule => {
            if (rule === 'description' || rule === 'intro') {
                return '';
            }

            return `- **${utils.capitalize(rule)}:** ${atRules[rule]}`;
        }).join('')}
        ----------
    `;
};
