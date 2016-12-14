/* eslint-env jest */
const getPseudoStateName = require('./getPseudoStateName');

test('it correctly extracts name of the pseudo state', () => {
    expect(getPseudoStateName('.some-selector.pseudo-active')).toEqual('active');
});
