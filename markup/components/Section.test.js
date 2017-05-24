/* eslint-env jest */
const Section = require('./Section');

test('it works for components without states', () => {
    global.config = require('../../config');

    expect(Section({
        markup: '<div class="block">The quick brown fox jumps over the lazy dog</div>',
        atRules: {},
        classes: 'block',
        mixedStates: {},
        name: 'block',
        pseudoStates: {},
        states: {},
        tagName: 'div',
    })).toMatchSnapshot();
});


test('it returns the expected markup', () => {
    global.config = require('../../config');

    expect(Section({
        atRules: {},
        classes: 'block',
        markup: '<div class="block">The quick brown fox jumps over the lazy dog</div>',
        mixedStates: {
            hoverdimmed: {
                atRules: {},
                pseudo: 'hover',
                state: 'dimmed',
            },
        },
        name: 'block',
        pseudoStates: {
            hover: 'hover',
        },
        states: {
            dimmed: {
                atRules: {},
                name: 'dimmed',
            },
        },
        tagName: 'div',
    })).toMatchSnapshot();
});
