'use strict';

const test = require('tape');
const tapSpec = require('tap-spec');
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

const getElementMarkup = require('../utils/getElementMarkup');

test('works for component', function (t) {
    const element = getElementMarkup({
        component: 'block',
    });

    t.equal(element, '<div class="block"></div>');
    t.end();
});

test('works for component with modifier', function (t) {
    const element = getElementMarkup({
        component: 'block',
        modifier: 'modifier',
    });

    t.equal(element, '<div class="block block--modifier"></div>');
    t.end();
});

test('works for component with element', function (t) {
    const element = getElementMarkup({
        component: 'block',
        element: 'element',
    });

    t.equal(element, '<div class="block__element"></div>');
    t.end();
});

test('works for component with element with modifier', function (t) {
    const element = getElementMarkup({
        component: 'block',
        element: 'element',
        modifier: 'modifier',
    });

    t.equal(element, '<div class="block__element block__element--modifier"></div>');
    t.end();
});

test('works for component with element with state', function (t) {
    const element = getElementMarkup({
        component: 'block',
        state: 'is-state',
    });

    t.equal(element, '<div class="block is-state"></div>');
    t.end();
});

test('works for component with custom tag', function (t) {
    const element = getElementMarkup({
        component: 'block',
        tag: 'span',
    });

    t.equal(element, '<span class="block"></span>');
    t.end();
});

test('works for component with children', function (t) {
    const element = getElementMarkup({
        component: 'block',
        children: 'some text',
    });

    t.equal(element, '<div class="block">some text</div>');
    t.end();
});

test('works for component with attributes', function (t) {
    const element = getElementMarkup({
        component: 'block',
        attributes: 'id="test" data-test="test"',
    });

    t.equal(element, '<div id="test" data-test="test" class="block"></div>');
    t.end();
});
