module.exports = {
    atRules: {
        tag: 'div',
        description: 'Some description...',
        required: true,
    },
    classes: 'block',
    customMarkup: null,
    elements: {
        element: {
            atRules: {
                tag: 'div',
                description: 'Some description...',
                required: false,
            },
            classes: 'block__element',
            markup: '<div class="block__element">…</div>',
            mixedStates: {
                dimmedhover: {
                    atRules: {
                        tag: 'div',
                        description: 'Some description...',
                        required: true,
                    },
                    pseudo: 'hover',
                    state: 'dimmed',
                },
            },
            modifiers: {
                modifier: {
                    atRules: {
                        tag: 'div',
                        description: 'Some description...',
                        required: false,
                    },
                    classes: 'block__element block__element--modifier',
                    markup: '<div class="block__element block__element--modifier">…</div>',
                    mixedStates: {
                        dimmedhover: {
                            atRules: {
                                tag: 'div',
                                description: 'Some description...',
                                required: false,
                            },
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
                            atRules: {
                                tag: 'div',
                                description: 'Some description...',
                                required: false,
                            },
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
                    atRules: {
                        tag: 'div',
                        description: 'Some description...',
                        required: false,
                    },
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
            atRules: {
                tag: 'div',
                description: 'Some description...',
                required: false,
            },
            pseudo: 'hover',
            state: 'dimmed',
        },
    },
    modifiers: {
        modifier: {
            atRules: {
                tag: 'div',
                description: 'Some description...',
                required: true,
            },
            classes: 'block block--modifier',
            markup: '<div class="block block--modifier">…</div>',
            mixedStates: {
                dimmedhover: {
                    atRules: {
                        tag: 'div',
                        description: 'Some description...',
                        required: true,
                    },
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
                    atRules: {
                        tag: 'div',
                        description: 'Some description...',
                        required: true,
                    },
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
            atRules: {
                tag: 'div',
                description: 'Some description...',
                required: true,
            },
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
};
