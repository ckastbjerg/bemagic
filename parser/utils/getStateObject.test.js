/* eslint-env jest */
const getStateObject = require('./getStateObject');

test('it has the expected shape', () => {
    expect(getStateObject('stateName')).toEqual({
        atRules: {},
        name: 'stateName',
    });
});
