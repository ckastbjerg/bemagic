module.exports = {
    atRules: {
        tag: 'div',
        intro: 'Some intro',
        description: 'Some description...',
        mandatory: true,
    },
    classes: 'block',
    customMarkup: null,
    derivedExample: '<div>Example markup derived by bemagic</div>',
    elements: {
        element: {
            atRules: {
                tag: 'div',
                description: 'Some description...',
                mandatory: false,
            },
            classes: 'block__element',
            markup: '<div class="block__element">…</div>',
            mixedStates: {
                dimmedhover: {
                    atRules: {
                        tag: 'div',
                        description: 'Some description...',
                        mandatory: true,
                    },
                    pseudo: 'hover',
                    state: 'dimmed',
                },
            },
            modifiers: {
                'element-modifier': {
                    atRules: {
                        tag: 'div',
                        description: 'Some description...',
                        mandatory: false,
                    },
                    classes: 'block__element block__element--element-modifier',
                    markup: '<div class="block__element block__element--element-modifier">…</div>',
                    mixedStates: {
                        dimmedhover: {
                            atRules: {
                                tag: 'div',
                                description: 'Some description...',
                                mandatory: false,
                            },
                            pseudo: 'hover',
                            state: 'dimmed',
                        },
                    },
                    name: 'element-modifier',
                    pseudoStates: {
                        hover: 'hover',
                    },
                    states: {
                        dimmed: {
                            atRules: {
                                tag: 'div',
                                description: 'Some description...',
                                mandatory: false,
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
                        mandatory: false,
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
                mandatory: false,
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
                mandatory: true,
            },
            classes: 'block block--modifier',
            markup: '<div class="block block--modifier">…</div>',
            mixedStates: {
                dimmedhover: {
                    atRules: {
                        tag: 'div',
                        description: 'Some description...',
                        mandatory: true,
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
                        mandatory: true,
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
                mandatory: true,
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
