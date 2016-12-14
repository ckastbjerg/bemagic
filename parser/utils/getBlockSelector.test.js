/* eslint-env jest */
const getBlockSelector = require('./getBlockSelector');

test('it extracts selector correctly', () => {
    global.config = { namespace: 'prefix' };

    expect(getBlockSelector('.block')).toEqual('.block');
});

test('it ignores theming classes', () => {
    global.config = { themeClass: 'theme' };

    expect(getBlockSelector('.theme-inverse .block')).toEqual('.block');
    expect(getBlockSelector('.theme-inverse.block')).toEqual('.block');
    expect(getBlockSelector('.block.theme-inverse')).toEqual('.block');
});

