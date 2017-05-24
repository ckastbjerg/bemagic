/* eslint-env jest */
const getElementObject = require('./getElementObject');

test('it has the expected shape', () => {
    global.config = { namespace: 'prefix' };
    expect(getElementObject({
        blockName: 'block',
        elementName: 'element',
    })).toEqual({
        atRules: {},
        mixedStates: {},
        modifiers: {},
        name: 'element',
        classes: 'prefix-block__element',
        markup: null,
        pseudoStates: {},
        states: {},
        tagName: null,
        themes: {},
    });
});
