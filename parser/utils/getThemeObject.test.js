/* eslint-env jest */
const getThemeObject = require('./getThemeObject');

test('it has the expected shape', () => {
    global.config = { themeClass: 'theme', namespace: 'prefix' };
    expect(getThemeObject('inverse')).toEqual({
        classes: 'prefix-theme-inverse',
        name: 'inverse',
    });
});
