/* eslint-env jest */
const TableOfContents = require('./TableOfContents');

test('it works for simple components', () => {
    expect(TableOfContents({
        themes: {},
        modifiers: {},
        elements: {},
        states: {},
    })).toMatchSnapshot();
});

test('it works for complex components', () => {
    expect(TableOfContents({
        themes: { theme: {} },
        modifiers: { modifier: {} },
        elements: { element: {} },
        states: { state: {} },
    })).toMatchSnapshot();
});
