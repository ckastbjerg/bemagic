/* eslint-env jest */
const index = require('./index');

test('returns markup for a complex component', () => {
    global.config = require('../config');

    expect(index({
        components: {},
        themes: [
            {
                name: 'secondary',
                classes: 'prefix-theme-secondary',
            },
            {
                name: 'inverse',
                classes: 'prefix-theme-inverse',
            },
        ],
        css: '.block { background: red; }',
    })).toMatchSnapshot();
});
