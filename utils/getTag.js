'use strict';

const TAGS = {
    button: 'button',
    input: 'input',
    select: 'select',
    option: 'option',
    a: 'a',
    link: 'a',
    ul: 'ul',
    li: 'li',
    label: 'label',
    paragraph: 'p',
};

// Returns string. Either 1. user-specified tag, or 2. tag from config file, 3. div
module.exports = function(componentName) {
    let tag = TAGS[componentName] || 'div';

    if (tag === 'a') {
        tag += ' href="#"';
    }

    return tag;
};
