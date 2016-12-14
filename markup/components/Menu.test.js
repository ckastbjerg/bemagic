/* eslint-env jest */
const Menu = require('./Menu');

test('returns menu markup', () => {
    global.config = require('../../config');

    expect(Menu({
        components: {
            block: {},
            background: {},
        },
    })).toMatchSnapshot();
});
