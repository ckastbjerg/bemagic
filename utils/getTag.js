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

module.exports = function({
    atRules = {},
    blockName = null,
}) {
    if (!blockName) {
        throw(new Error('Missing argument: blockName'));
    }

    let tag = 'div';

    if (atRules['tag']) {
        tag = atRules['tag'];
    } else if (TAGS[blockName]) {
        tag = TAGS[blockName];
    }

    if (tag === 'a') {
        tag += ' href="#"';
    }

    return tag;
};
