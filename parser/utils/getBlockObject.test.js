/* eslint-env jest */
const getBlockObject = require('./getBlockObject');

test('it has the expected shape', () => {
    global.config = { namespace: 'prefix' };

    expect(getBlockObject({
        blockName: 'block',
    })).toEqual({
        atRules: {},
        elements: {},
        mixedStates: {},
        modifiers: {},
        name: 'block',
        classes: 'prefix-block',
        markup: '<div class="prefix-block">…</div>',
        customMarkup: null,
        pseudoStates: {},
        states: {},
        tagName: 'div',
        themes: {},
    });
});

test('it works with custom markup', () => {
    global.config = { namespace: 'prefix' };

    expect(getBlockObject({
        blockName: 'block',
        customMarkup: '<h1 class="prefix-block">Custom markup</h1>',
    })).toEqual({
        atRules: {},
        elements: {},
        mixedStates: {},
        modifiers: {},
        name: 'block',
        classes: 'prefix-block',
        markup: '<div class="prefix-block">…</div>',
        customMarkup: '<h1 class="prefix-block">Custom markup</h1>',
        pseudoStates: {},
        states: {},
        tagName: 'div',
        themes: {},
    });
});
