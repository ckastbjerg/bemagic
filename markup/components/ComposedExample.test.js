/* eslint-env jest */
const path = require('path');
const ComposedExample = require('./ComposedExample');

test('returns a string of attributes from an object', () => {
    global.config = {
        namespace: 'prefix',
        componentsFolder: path.join(__dirname, '../../examples/src/components'),
    };

    expect(ComposedExample({ name: 'block' })).toMatchSnapshot();
});


test('will use derived example if no html file exists', () => {
    global.config = {
        namespace: 'prefix',
        componentsFolder: path.join(__dirname, '../../examples/src/components'),
    };

    expect(ComposedExample({ name: 'derive-example', derivedExample: '<div>A derived example</div>' })).toMatchSnapshot();
});
