/* eslint-env jest */
const getMixedStateObject = require('./getMixedStateObject');

test('it has the expected shape', () => {
    expect(getMixedStateObject({
        pseudoStateName: 'pseudoStateName',
        stateName: 'stateName',
    })).toEqual({
        atRules: {},
        pseudo: 'pseudoStateName',
        state: 'stateName',
    });
});
