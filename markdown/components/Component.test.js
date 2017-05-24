/* eslint-env jest */
const dummyBlock = require('../../dummyBlock');
const Component = require('./Component');

test('it works', () => {
    global.config = { namespace: 'prefix' };
    expect(Component(dummyBlock)).toMatchSnapshot();
});
