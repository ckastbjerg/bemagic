/* eslint-env jest */
const getStateName = require('./getStateName');

test('it correctly extracts name of the state', () => {
    expect(getStateName('.some-selector.is-active')).toEqual('active');
});
