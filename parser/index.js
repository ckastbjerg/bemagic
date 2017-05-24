'use strict';

const deepExtend = require('deep-extend');
const postcss = require('postcss');
const chalk = require('chalk');

const extractComponentsData = require('./extractComponentsData');
const setAtRules = require('./setAtRules');
const getAtRules = require('./getAtRules');
const setTags = require('./setTags');
const setMarkup = require('./setMarkup');
const setDerivedExamples = require('./setDerivedExamples');

const getThemeName = require('./utils/getThemeName');
const getThemeObject = require('./utils/getThemeObject');

module.exports = css => new Promise((resolve) => {
    postcss().process(css).then(function(css) {
        let components = {};
        const themes = {};

        css.root.walkRules(function (rule) {
            rule.selector.split(',').forEach(function(selector) {
                const componentData = extractComponentsData({ selector, components });
                if (componentData) {
                    const existingComponentData = components[componentData.name] || {};
                    components[componentData.name] = deepExtend(existingComponentData, componentData);
                }

                const themeName = getThemeName(selector);
                if (themeName && !themes[themeName]) {
                    themes[themeName] = getThemeObject(themeName);
                }
            });
        });

        css.root.walkComments(function(comment) {
            const next = comment.next();
            const text = comment.text;

            if (!comment.text.match(/@bemagic/)) { return; }
            if (!next) {
                console.warn(chalk.yellow('\n@bemagic: Couldn\'t match this comment to a selector:'));
                console.warn(`\n${text}`);
                return;
            }

            // TODO: don't mutate like this
            setAtRules({
                components,
                atRules: getAtRules(text),
                selector: next.selector,
            });
        });

        components = setTags(components);
        components = setMarkup(components);
        components = setDerivedExamples(components);

        resolve({
            components: components,
            themes: themes,
        });
    }).catch(err => {
        console.error('postcss process error', err);
    });
});
