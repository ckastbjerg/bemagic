// Returns a string of html attributes (e.g. for"something" id="myid")
module.exports.getAttributes = function(config, atRules) {
    let attributes = '';

    if (!atRules) {
        return attributes;
    }

    Object.keys(atRules).forEach(function(rule) {
        if (config.attributes[rule]) {
            attributes += ` ${rule}="${atRules[rule]}"`;
        }
    });

    return attributes;
};
