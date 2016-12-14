/* eslint-env jest */
const getModifierObject = require('./getModifierObject');

test('it works for block and modifier', () => {
    global.config = { namespace: 'prefix' };
    expect(getModifierObject({
        blockName: 'block',
        modifierName: 'modifier',
    })).toEqual({
        atRules: {},
        mixedStates: {},
        name: 'modifier',
        classes: 'prefix-block prefix-block--modifier',
        markup: '<div class="prefix-block prefix-block--modifier">…</div>',
        pseudoStates: {},
        states: {},
        tagName: 'div',
        themes: {},
    });
});

test('it works for block, element and modifier', () => {
    global.config = { namespace: 'prefix' };
    expect(getModifierObject({
        blockName: 'block',
        elementName: 'element',
        modifierName: 'modifier',
    })).toEqual({
        atRules: {},
        mixedStates: {},
        name: 'modifier',
        classes: 'prefix-block__element prefix-block__element--modifier',
        markup: '<div class="prefix-block__element prefix-block__element--modifier">…</div>',
        pseudoStates: {},
        states: {},
        tagName: 'div',
        themes: {},
    });
});
