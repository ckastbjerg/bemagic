/* eslint-env jest */
const Section = require('./Section');

test('it works for components without states', () => {
    global.config = require('../../config');

    expect(Section({
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
