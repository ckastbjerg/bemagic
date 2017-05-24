/* eslint-env jest */
const getShouldIgnoreSelector = require('./getShouldIgnoreSelector');

test('it doesn\'t ignore selectors containing valid patterns', () => {
    global.config = { themeClass: 'theme', cascadeClass: 'cascading'};

    expect(getShouldIgnoreSelector('.block')).toEqual(false);
    expect(getShouldIgnoreSelector('.cascading-theme-inverse .block')).toEqual(false);
});

test('it ignores selectors containing excluded patterns', () => {
    global.config = { themeClass: 'theme', cascadeClass: 'cascading'};

    expect(getShouldIgnoreSelector('#block')).toEqual(true);
    expect(getShouldIgnoreSelector('.pseudo-before')).toEqual(true);
    expect(getShouldIgnoreSelector('.pseudo-after')).toEqual(true);
    expect(getShouldIgnoreSelector('-ms-expand')).toEqual(true);
    expect(getShouldIgnoreSelector('-moz-appearance')).toEqual(true);
});

test('it correctly ignores nested classes', () => {
    global.config = { themeClass: 'theme', cascadeClass: 'cascading'};

    expect(getShouldIgnoreSelector('.cascading-theme-inverse .block .illegal-nesting')).toEqual(true);
    expect(getShouldIgnoreSelector('.block .illegal-nesting')).toEqual(true);
});

test('it correctly ignores combined cascading classes', () => {
    global.config = { themeClass: 'theme', cascadeClass: 'cascading'};

    expect(getShouldIgnoreSelector('.ixu-cascading-theme-inverse.ixu-cascading-typography')).toEqual(true);
});

test('it does not exclude themed cascading classes', () => {
    global.config = { themeClass: 'theme', cascadeClass: 'cascading'};

    expect(getShouldIgnoreSelector('.cascading-theme-inverse .block')).toEqual(false);
});
