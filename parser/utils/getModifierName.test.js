/* eslint-env jest */
const getModifierName = require('./getModifierName');

test('it correctly extracts the BEM modifier name', () => {
    expect(getModifierName('.block')).toEqual(null);
    expect(getModifierName('.block__element')).toEqual(null);
    expect(getModifierName('.block--modifier')).toEqual('modifier');
    expect(getModifierName('.block__element--modifier')).toEqual('modifier');
});
