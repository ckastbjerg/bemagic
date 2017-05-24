/* eslint-env jest */

const getAttributes = require('./getAttributes');

test('returns a string of attributes from an object', () => {
    expect(getAttributes({
        value: 'some value',
        placeholder: 'some placeholder',
    })).toEqual(' value="some value" placeholder="some placeholder"');
});

test('returns empty string if no arguments', () => {
    expect(getAttributes()).toEqual('');
});
