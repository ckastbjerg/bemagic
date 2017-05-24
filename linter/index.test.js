/* eslint-env jest */
const linter = require('./index');
const dummyBlock = require('../dummyBlock');

test('it works', () => {
    expect(linter([dummyBlock])).toMatchSnapshot();
});
