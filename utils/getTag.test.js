/* eslint-env jest */
const getTag = require('./getTag');

test('tag specified in @ rule takes precedence', () => {
    expect(getTag({
        atRules: { tag: 'div' },
        blockName: 'button',
    })).toEqual('div');
});

test('uses component name if this maps to a supplied tag', () => {
    expect(getTag({
        blockName: 'button',
    })).toEqual('button');
});

test('prepends a dummy href for links', () => {
    expect(getTag({
        blockName: 'link',
    })).toEqual('a href="#"');
});

test('defaults to a div', () => {
    expect(getTag({
        blockName: 'something',
    })).toEqual('div');
});
