/* eslint-env jest */
const ThemeButton = require('./ThemeButton');

test('returns a string of attributes from an object', () => {
    global.config = require('../../config');

    expect(ThemeButton({
        componentName: 'block',
        themeName: 'secondary',
        themeClasses: 'prefix-theme-secondary',
    })).toMatchSnapshot();
});
