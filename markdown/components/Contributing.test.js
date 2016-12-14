/* eslint-env jest */
const Contributing = require('./Contributing');

test('it works', () => {
    expect(Contributing()).toMatchSnapshot();
});
