/* eslint-env jest */
const Heading = require('./Heading');

test('returns a string of attributes from an object', () => {
    global.config = require('../../config');

    expect(Heading({
        backgroundClass: 'background',
        themes: [
            { name: 'secondary', classes: 'prefix-theme-secondary' },
            { name: 'inverse', classes: 'prefix-theme-inverse' },
        ],
        componentName: 'block',
    })).toMatchSnapshot();
});
