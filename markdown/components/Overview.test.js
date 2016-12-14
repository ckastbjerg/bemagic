/* eslint-env jest */
const Overview = require('./Overview');

test('it throws', () => {
    expect(() => Overview()).toThrow();
});

test('it works', () => {
    expect(Overview({
        tag: 'div',
        classes: 'block',
        states: ['is-dimmed'],
        elements: {
            element: {
                tag: 'div',
                classes: 'block__element',
                states: ['is-dimmed'],
                modifiers: {
                    modifier: {
                        tag: 'div',
                        classes: 'block__element--modifier',
                        states: ['is-something'],
                    },
                },
            },
        },
        modifiers: {
            modifier: {
                tag: 'div',
                classes: 'block__element--modifier',
                states: ['is-something'],
            },
        },
    })).toMatchSnapshot();
});
