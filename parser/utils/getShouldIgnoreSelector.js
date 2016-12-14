const excludeRegExp = /pseudo-before|pseudo-after|ms-|moz-|class\*=/g;
/*
 * Verify that no nesting is done.
 * @param {String} selector - A CSS selector
 * @return {Boolean}
 */
module.exports = function(selector) {
    const config = global.config;

    const classes = selector.trim().split(/ /);
    const isThemingUsed = classes[0].indexOf(config.themeClass) !== -1;

    if (
        selector.indexOf(config.cascadeClass) !== -1 ||
        !selector.match(/\./) || // only CSS classes should be processed
        selector.match(excludeRegExp) ||
        (isThemingUsed && classes.length > 2) || // only one level nesting allowed for theming classes
        (!isThemingUsed && classes.length > 1) // nesting is not allowed
    ) {
        return true;
    }

    return false;
};
