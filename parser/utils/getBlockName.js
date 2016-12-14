const constants = require('../constants');

module.exports = function(rule) {
    const config = global.config || {};
    const prefix = config.namespace ? `${config.namespace}-` : '';
    const regExp = new RegExp(`${prefix}(${constants.WORD})`);
    return rule.match(regExp) ? rule.match(regExp)[1] : null;
};
