const TAGS = {
    button: 'button',
    textfield: 'input',
    select: 'select',
    checkbox: 'input',
    radio: 'input',
    option: 'option',
    a: 'a',
    link: 'a',
    ul: 'ul',
    li: 'li',
    label: 'label',
    paragraph: 'p',
};

module.exports = function(BEMObject) {
    if (!BEMObject.name) {
        throw(new Error('Missing property on BEMObject: name'));
    }

    const tag = BEMObject.atRules ? BEMObject.atRules.tag : null;
    return tag || TAGS[BEMObject.name] || 'div';
};
