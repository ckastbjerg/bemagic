/* eslint-env jest */
const Page = require('./Page');
const dummyBlock = require('../../dummyBlock');

test('returns markup for a complex component', () => {
    global.config = require('../../config');
    expect(Page(dummyBlock)).toMatchSnapshot();
});
