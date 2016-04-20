'use strict';

const deepExtend = require('deep-extend');
const postcss = require('postcss');
const extractComponentsData = require('./extractComponentsData');
const extractAtRules = require('./extractAtRules');

const utils = require('./utils');

module.exports = (config, css) => new Promise((resolve) => {
    postcss().process(css).then(function(css) {
        const components = {};
        const themes = new Set();

        css.root.walkRules(function (rule) {
            rule.selector.split(',').forEach(function(selector) {
                const componentData = extractComponentsData(config, selector, components);
                if (componentData) {
                    const existingComponentData = components[componentData.name] || {};
                    components[componentData.name] = deepExtend(existingComponentData, componentData);

                    const theme = utils.getThemeName(config, selector);
                    if (theme) {
                        themes.add(theme);
                    }
                }
            });
        });

        css.root.walkComments(function(comment) {
            extractAtRules(config, comment, components); // TODO: don't mutate like this
        });

        resolve({
            components: components,
            themes: themes,
        });
    });
});
