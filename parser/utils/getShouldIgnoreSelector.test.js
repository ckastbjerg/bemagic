/* eslint-env jest */
const getShouldIgnoreSelector = require('./getShouldIgnoreSelector');

test('it doesn\'t ignore selectors containing valid patterns', () => {
    global.config = { themeClass: 'theme' };

    expect(getShouldIgnoreSelector('.block')).toEqual(false);
    expect(getShouldIgnoreSelector('.theme-inverse .block')).toEqual(false);
});

test('it ignores selectors containing excluded patterns', () => {
    expect(getShouldIgnoreSelector('block')).toEqual(true);
    expect(getShouldIgnoreSelector('.pseudo-before')).toEqual(true);
    expect(getShouldIgnoreSelector('.pseudo-after')).toEqual(true);
    expect(getShouldIgnoreSelector('-ms-expand')).toEqual(true);
    expect(getShouldIgnoreSelector('-moz-appearance')).toEqual(true);
});

test('it correctly ignores nested classes', () => {
    global.config = { themeClass: 'theme' };

    expect(getShouldIgnoreSelector('.theme-inverse .block .another-block')).toEqual(true);
    expect(getShouldIgnoreSelector('.illegal-nesting .block')).toEqual(true);
});
