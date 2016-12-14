const constants = require('../constants');

module.exports = function(rule) {
    const regExp = new RegExp('__(' + constants.WORD + ')');
    return rule.match(regExp) ? rule.match(regExp)[1] : null;
};
