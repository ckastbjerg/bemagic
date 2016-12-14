module.exports = function(themeName) {
    const config = global.config;
    const prefix = config.namespace ? `${config.namespace}-` : '';

    return {
        name: themeName,
        classes: `${prefix}${config.themeClass}-${themeName}`,
    };
};
