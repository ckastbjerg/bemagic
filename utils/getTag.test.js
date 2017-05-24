/* eslint-env jest */
const getTag = require('./getTag');

test('tag specified in @ rule takes precedence', () => {
    expect(getTag({
        atRules: { tag: 'div' },
        name: 'button',
    })).toEqual('div');
});

test('uses component name if this maps to a supplied tag', () => {
    expect(getTag({
        name: 'button',
    })).toEqual('button');
});

test('defaults to a div', () => {
    expect(getTag({
        name: 'not-a-valid-tag',
    })).toEqual('div');
});
