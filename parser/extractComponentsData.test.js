/* eslint-env jest */
const extractComponentsData = require('./extractComponentsData');

global.config = require('../config');

const mockedBlock = {
    atRules: {},
    classes: 'block',
    customMarkup: null,
    elements: {},
    markup: null,
    mixedStates: {},
    modifiers: {},
    name: 'block',
    pseudoStates: {},
    states: {},
    tagName: null,
    themes: {},
};

const mockedModifier = {
    atRules: {},
    classes: 'block block--modifier',
    markup: null,
    mixedStates: {},
    name: 'modifier',
    pseudoStates: {},
    states: {},
    tagName: null,
    themes: {},
};

const mockedElement = {
    atRules: {},
    classes: 'block__element',
    markup: null,
    mixedStates: {},
    modifiers: {},
    name: 'element',
    pseudoStates: {},
    states: {},
    tagName: null,
    themes: {},
};

const mockedElementModifier = {
    atRules: {},
    classes: 'block__element block__element--modifier',
    markup: null,
    mixedStates: {},
    name: 'modifier',
    pseudoStates: {},
    states: {},
    tagName: null,
    themes: {},
};

const mockedState = {
    atRules: {},
    name: 'dimmed',
};

const mockedMixedState = {
    atRules: {},
    pseudo: 'hover',
    state: 'dimmed',
};

const mockedTheme = {
    classes: 'theme-inverse',
    name: 'inverse',
};

const mockedPseudoState = 'hover';

test('it returns expected shape for block selector', () => {
    const actual = extractComponentsData({
        selector: '.block',
        components: {},
    });
    expect(actual).toEqual(mockedBlock);
});

test('it returns expected shape for block selector with theme', () => {
    const actual = extractComponentsData({
        selector: '.theme-inverse .block',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        themes: {
            inverse: mockedTheme,
        },
    }));
});

test('it returns expected shape for modifier selector', () => {
    const actual = extractComponentsData({
        selector: '.block--modifier',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        modifiers: {
            modifier: mockedModifier,
        },
    }));
});

test('it returns expected shape for modifier selector', () => {
    const actual = extractComponentsData({
        selector: '.theme-inverse .block--modifier',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        modifiers: {
            modifier: Object.assign({}, mockedModifier, {
                themes: {
                    inverse: mockedTheme,
                },
            }),
        },
    }));
});

test('it returns expected shape for element selector', () => {
    const actual = extractComponentsData({
        selector: '.block__element',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        elements: {
            element: mockedElement,
        },
    }));
});

test('it returns expected shape for element selector with theme', () => {
    const actual = extractComponentsData({
        selector: '.theme-inverse .block__element',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        elements: {
            element: Object.assign({}, mockedElement, {
                themes: {
                    inverse: mockedTheme,
                },
            }),
        },
    }));
});

test('it returns expected shape for element modifier selector', () => {
    const actual = extractComponentsData({
        selector: '.block__element--modifier',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        elements: {
            element: Object.assign({}, mockedElement, {
                modifiers: {
                    modifier: mockedElementModifier,
                },
            }),
        },
    }));
});

test('it returns expected shape for element modifier selector with theme', () => {
    const actual = extractComponentsData({
        selector: '.theme-inverse .block__element--modifier',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        elements: {
            element: Object.assign({}, mockedElement, {
                modifiers: {
                    modifier: Object.assign({}, mockedElementModifier, {
                        themes: {
                            inverse: mockedTheme,
                        },
                    }),
                },
            }),
        },
    }));
});

test('it returns expected shape for selectors with state', () => {
    const actual = extractComponentsData({
        selector: '.block__element--modifier.is-dimmed',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        elements: {
            element: Object.assign({}, mockedElement, {
                modifiers: {
                    modifier: Object.assign({}, mockedElementModifier, {
                        states: {
                            dimmed: mockedState,
                        },
                    }),
                },
            }),
        },
    }));
});

test('it returns expected shape for pseudo selectors', () => {
    const actual = extractComponentsData({
        selector: '.block__element--modifier.pseudo-hover',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        elements: {
            element: Object.assign({}, mockedElement, {
                modifiers: {
                    modifier: Object.assign({}, mockedElementModifier, {
                        pseudoStates: {
                            hover: mockedPseudoState,
                        },
                    }),
                },
            }),
        },
    }));
});

test('it returns expected shape for mixed state selectors', () => {
    const actual = extractComponentsData({
        selector: '.theme-inverse .block__element--modifier.is-dimmed.pseudo-hover',
        components: {},
    });
    expect(actual).toEqual(Object.assign({}, mockedBlock, {
        elements: {
            element: Object.assign({}, mockedElement, {
                modifiers: {
                    modifier: Object.assign({}, mockedElementModifier, {
                        mixedStates: {
                            dimmedhover: mockedMixedState,
                        },
                        themes: {
                            inverse: mockedTheme,
                        },
                    }),
                },
            }),
        },
    }));
});
