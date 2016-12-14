/* eslint-env jest */
const Info = require('./Info');

test('it throws', () => {
    expect(() => Info()).toThrow();
});

test('it works', () => {
    expect(Info({
        part: {
            modifier: {
                atRules: {},
                markup: '<div class="block block--modifier">…</div>',
                name: 'modifier',
            },
        },
        type: 'modifier',
        componentName: 'block',
    })).toMatchSnapshot();
});
