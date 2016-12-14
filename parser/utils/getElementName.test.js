/* eslint-env jest */
const getElementName = require('./getElementName');

test('it correctly extracts the BEM element name', () => {
    expect(getElementName('.block')).toEqual(null);
    expect(getElementName('.block__element')).toEqual('element');
    expect(getElementName('.block--modifier')).toEqual(null);
    expect(getElementName('.block__element--modifier')).toEqual('element');
});
