/* eslint-env jest */
const path = require('path');
const ComposedExample = require('./ComposedExample');

test('returns a string of attributes from an object', () => {
    global.config = {
        namespace: 'prefix',
        componentsFolder: path.join(__dirname, '../../examples/src/components'),
    };

    expect(ComposedExample('block')).toMatchSnapshot();
});
