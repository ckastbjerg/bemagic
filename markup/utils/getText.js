module.exports = function(atRules) {
    const config = global.config;

    if (!atRules) {
        return config.text;
    } else {
        // text might be '' which is why we can't just access it directly
        return atRules['text'] !== undefined ? atRules['text'] : config.text;
    }
};
