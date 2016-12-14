/* eslint-env jest */
const OverviewRow = require('./OverviewRow');

test('it throws', () => {
    expect(() => OverviewRow()).toThrow();
});

test('it works', () => {
    expect(OverviewRow({
        tagName: 'div',
        classes: 'block',
        states: ['is-active', 'is-dimmed'],
        type: 'component',
    })).toMatchSnapshot();
});
