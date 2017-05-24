/* eslint-env jest */
const TitleAndIntro = require('./TitleAndIntro');

test('it throws', () => {
    expect(() => TitleAndIntro()).toThrow();
});

test('it works', () => {
    expect(TitleAndIntro({
        componentName: 'block',
        componentClasses: 'prefix-block',
        intro: 'Some intro',
    })).toMatchSnapshot();
});
