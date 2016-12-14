/* eslint-env jest */
const getBlockName = require('./getBlockName');

test('it correctly extracts the component (block) name', () => {
    expect(getBlockName('.block')).toEqual('block');
    expect(getBlockName('.block__element')).toEqual('block');
    expect(getBlockName('.block--modifier')).toEqual('block');
    expect(getBlockName('.block__element--modifier')).toEqual('block');
});

test('it ignores namespaces', () => {
    global.config = { namespace: 'prefix' };
    expect(getBlockName('.prefix-block')).toEqual('block');
    expect(getBlockName('.prefix-block__element')).toEqual('block');
    expect(getBlockName('.prefix-block--modifier')).toEqual('block');
    expect(getBlockName('.prefix-block__element--modifier')).toEqual('block');
});
