/* eslint-env jest */
const Page = require('./Page');

test('returns markup for a complex component', () => {
    global.config = require('../../config');

    expect(Page({
        atRules: {},
        classes: 'block',
        customMarkup: null,
        elements: {
            element: {
                atRules: {},
                classes: 'block__element',
                markup: '<div class="block__element">…</div>',
                mixedStates: {
                    dimmedhover: {
                        atRules: {},
                        pseudo: 'hover',
                        state: 'dimmed',
                    },
                },
                modifiers: {
                    modifier: {
                        atRules: {},
                        classes: 'block__element block__element--modifier',
                        markup: '<div class="block__element block__element--modifier">…</div>',
                        mixedStates: {
                            dimmedhover: {
                                atRules: {},
                                pseudo: 'hover',
                                state: 'dimmed',
                            },
                        },
                        name: 'modifier',
                        pseudoStates: {
                            hover: 'hover',
                        },
                        states: {
                            dimmed: {
                                atRules: {},
                                name: 'dimmed',
                            },
                        },
                        tagName: 'div',
                        themes: {
                            inverse: {
                                classes: 'theme-inverse',
                                name: 'inverse',
                            },
                        },
                    },
                },
                name: 'element',
                pseudoStates: {
                    hover: 'hover',
                },
                states: {
                    dimmed: {
                        atRules: {},
                        name: 'dimmed',
                    },
                },
                tagName: 'div',
                themes: {
                    inverse: {
                        classes: 'theme-inverse',
                        name: 'inverse',
                    },
                },
            },
        },
        markup: '<div class="block">…</div>',
        mixedStates: {
            dimmedhover: {
                atRules: {},
                pseudo: 'hover',
                state: 'dimmed',
            },
        },
        modifiers: {
            modifier: {
                atRules: {},
                classes: 'block block--modifier',
                markup: '<div class="block block--modifier">…</div>',
                mixedStates: {
                    dimmedhover: {
                        atRules: {},
                        pseudo: 'hover',
                        state: 'dimmed',
                    },
                },
                name: 'modifier',
                pseudoStates: {
                    hover: 'hover',
                },
                states: {
                    dimmed: {
                        atRules: {},
                        name: 'dimmed',
                    },
                },
                tagName: 'div',
                themes: {
                    inverse: {
                        classes: 'theme-inverse',
                        name: 'inverse',
                    },
                },
            },
        },
        name: 'block',
        pseudoStates: {
            hover: 'hover',
        },
        states: {
            dimmed: {
                atRules: {},
                name: 'dimmed',
            },
        },
        tagName: 'div',
        themes: {
            inverse: {
                classes: 'theme-inverse',
                name: 'inverse',
            },
        },
    })).toMatchSnapshot();
});
