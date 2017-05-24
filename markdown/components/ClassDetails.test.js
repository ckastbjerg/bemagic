/* eslint-env jest */
const ClassDetails = require('./ClassDetails');

test('it throws', () => {
    expect(() => ClassDetails()).toThrow();
});

test('it works', () => {
    expect(ClassDetails({
        atRules: {
            description: 'Some description...',
            intro: 'Some intro',
            tag: 'span',
        },
        name: 'block',
        markup: '<div class="block">...</div>',
        states: ['hover', 'active', 'disabled'],
        themes: ['inverse', 'secondary'],
    })).toMatchSnapshot();
});
