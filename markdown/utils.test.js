/* eslint-env jest */
const utils = require('./utils');

test('capitalize works', () => {
    const actual = utils.capitalize('some sentence');
    expect(actual).toMatchSnapshot();
});

test('description works', () => {
    const actual = utils.description('some sentence');
    expect(actual).toMatchSnapshot();
});

test('menuItem works', () => {
    const actual = utils.menuItem('some sentence');
    expect(actual).toMatchSnapshot();
});

test('notice works', () => {
    const actual = utils.notice('some sentence');
    expect(actual).toMatchSnapshot();
});

test('sectionTitle works', () => {
    const actual = utils.sectionTitle('some title');
    expect(actual).toMatchSnapshot();
});

test('title works', () => {
    const actual = utils.title({
        name: 'block',
        classes: 'prefix-block',
    });
    expect(actual).toMatchSnapshot();
});

test('it throws if parameter `list` is not an array', () => {
    expect(() => utils.listString({ list: '' })).toThrow();
});

test('it works', () => {
    expect(utils.listString({
        list: ['inverse', 'secondary'],
    })).toMatchSnapshot();
});

test('it works with custom word', () => {
    expect(utils.listString({
        list: ['inverse', 'secondary'],
        word: 'or',
    })).toMatchSnapshot();
});
