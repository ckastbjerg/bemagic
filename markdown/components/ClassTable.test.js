/* eslint-env jest */
const ClassTable = require('./ClassTable');

test('it throws when missing `elements` parameter', () => {
    expect(() => ClassTable()).toThrow(/elements/);
});

test('it throws when `elements` are missing name property', () => {
    expect(() => ClassTable({ test: {} })).toThrow(/name/);
});

test('it throws when `elements` are missing atRules property', () => {
    expect(() => ClassTable({ test: { name: 'some-name' } })).toThrow(/atRules/);
});

test('it works for correct shape', () => {
    const actual = ClassTable({
        test: {
            name: 'some-name',
            atRules: {
                description: 'Some description...',
            },
        },
    });

    expect(actual).toMatchSnapshot();
});
