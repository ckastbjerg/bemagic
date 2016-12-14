/* eslint-env jest */
const getAtRules = require('./getAtRules');

global.config = require('../config');

const text = `
    @bemagic {
        description: Description of a \`block\`,
        intro: intro for the \`block\` component...,
        required: true,
        tag: input,
    }
`;

test('it returns expected shape for block selector', () => {
    expect(getAtRules(text)).toEqual({
        description: 'Description of a `block`',
        intro: 'intro for the `block` component...',
        required: true,
        tag: 'input',
    });
});
