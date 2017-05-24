/* eslint-env jest */
const Overview = require('./Overview');

test('it throws', () => {
    expect(() => Overview()).toThrow();
});

test('it works', () => {
    expect(Overview({
        tag: 'div',
        name: 'block',
        states: ['is-dimmed'],
        elements: {
            element: {
                tag: 'div',
                name: 'element',
                states: ['is-dimmed'],
                modifiers: {
                    modifier: {
                        tag: 'div',
                        name: 'modifier',
                        states: ['is-something'],
                    },
                },
            },
        },
        modifiers: {
            modifier: {
                tag: 'div',
                name: 'modifier',
                states: ['is-something'],
            },
        },
    })).toMatchSnapshot();
});
