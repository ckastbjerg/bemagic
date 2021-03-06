/* eslint-env jest */
const getElementMarkup = require('../utils/getElementMarkup');

test('works for block', function () {
    const actual = getElementMarkup({
        blockName: 'block',
    });
    const expected = '<div class="block">Default block</div>';
    expect(actual).toEqual(expected);
});

test('works for block with modifier', function () {
    const actual = getElementMarkup({
        blockName: 'block',
        modifierName: 'modifier',
    });
    const expected = '<div class="block block--modifier">modifier block</div>';
    expect(actual).toEqual(expected);
});

test('works for block with element', function () {
    const actual = getElementMarkup({
        blockName: 'block',
        elementName: 'element',
    });
    const expected = '<div class="block__element">element block</div>';
    expect(actual).toEqual(expected);
});

test('works for block with element and modifier', function () {
    const actual = getElementMarkup({
        blockName: 'block',
        elementName: 'element',
        modifierName: 'modifier',
    });
    const expected = '<div class="block__element block__element--modifier">element modifier block</div>';
    expect(actual).toEqual(expected);
});

test('works for block with element with state', function () {
    const actual = getElementMarkup({
        blockName: 'block',
        stateName: 'is-state',
    });
    const expected = '<div class="block is-state">is-state block</div>';
    expect(actual).toEqual(expected);
});

test('works with custom tag', function () {
    const actual = getElementMarkup({
        blockName: 'block',
        tagName: 'span',
    });
    const expected = '<span class="block">Default block</span>';
    expect(actual).toEqual(expected);
});

test('works with children', function () {
    const actual = getElementMarkup({
        blockName: 'block',
        children: 'some text',
    });
    const expected = '<div class="block">some text</div>';
    expect(actual).toEqual(expected);
});
