/* eslint-env jest */
const Theming = require('./Theming');

test('it throws', () => {
    expect(() => Theming()).toThrow();
});

test('it works', () => {
    global.config = { namespace: 'prefix', themeClass: 'theme' };

    expect(Theming({
        classes: 'block',
        tag: 'div',

    })).toMatchSnapshot();
});
