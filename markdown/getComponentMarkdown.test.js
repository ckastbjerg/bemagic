/* eslint-env jest */
const dummyBlock = require('../dummyBlock');
const getComponentMarkdown = require('./getComponentMarkdown');

test('it works', () => {
    global.config = { namespace: 'prefix' };
    expect(getComponentMarkdown({
        component: Object.assign({}, dummyBlock),
        exampleMarkup: null,
    })).toMatchSnapshot();
});
