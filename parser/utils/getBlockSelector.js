const constants = require('../constants');

/*
 * Returns a component selector stripped from theming classes.
 * @param {String} selector A CSS selector
 * @return {String|Undefined}
 */
module.exports = function(selector) {
    if (typeof selector !== 'string') {
        throw new Error('Argument `selector` must be a string');
    }
    const config = global.config || {};
    // remove theming class if any
    const prefix = config.namespace ? `${config.namespace}-` : '';
    const regExp = new RegExp(`.${prefix}${config.themeClass}-(${constants.WORD})`);
    const strippedSelector = selector.replace(regExp, '').trim();

    return strippedSelector.trim().split(/ /)[0];
};
