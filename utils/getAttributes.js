// Returns a string of html attributes (e.g. for"something" id="myid")

const htmlAttributes = require('html-attributes');

module.exports = function(atRules) {
    let attributes = '';

    if (!atRules) {
        return attributes;
    }

    Object.keys(atRules).forEach(function(rule) {
        if (htmlAttributes[rule]) {
            const attribute = `${rule}="${atRules[rule]}"`;
            attributes += ` ${attribute}`;
        }
    });

    return attributes;
};
