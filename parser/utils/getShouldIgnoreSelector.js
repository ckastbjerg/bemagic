const excludeRegExp = /#|pseudo-before|pseudo-after|ms-|moz-|class\*=/g;
/*
 * Verify that no nesting is done.
 * @param {String} selector - A CSS selector
 * @return {Boolean}
 */
module.exports = function(selector) {
    const config = global.config || {};
    const namespace = config.namespace ? `${config.namespace}-` : '';
    const regExp = new RegExp(`(.*?)${namespace}${config.themeClass}\\S+`, 'g');
    const formattedSelector = selector.replace(regExp, '').trim();

    if (
        formattedSelector.match('cascading') ||
        formattedSelector === '' ||
        formattedSelector.match('\\*') ||
        !formattedSelector.match('.') ||
        formattedSelector.split(/ /).length > 1 ||
        formattedSelector.match(excludeRegExp)
    ) {
        return true;
    }

    return false;
};
