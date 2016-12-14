/* eslint-env jest */
const getThemeName = require('./getThemeName');

test('it correctly extracts the theme name', () => {
    global.config = { themeClass: 'theme' };
    expect(getThemeName('.theme-inverse .block')).toEqual('inverse');
});

test('it works with a namespace', () => {
    global.config = { themeClass: 'theme', namespace: 'prefix' };
    expect(getThemeName('.prefix-theme-inverse .prefix-block')).toEqual('inverse');
});
