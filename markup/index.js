'use strict';

const cheerio = require('cheerio');
const fs = require('fs');

const getComponentTemplateFile = require('../utils/getComponentTemplateFile');
const utils = require('./utils');

module.exports = function(config, css, data) {
    const components = data.components || {};
    const themesGlobal = data.themes || {};

    const componentsPath = fs.realpathSync(config.componentsFolder);
    const namespace = config.namespace ? `${config.namespace}-` : '';

    // console.log(util.inspect(components, {showHidden: false, depth: null}));
    const $ = cheerio.load(`
        <div class="bemagic-app js-bemagic-app-template">
            <style>${css}</style>
            <div class="bemagic-app__header bemagic-header js-header">
                <div class="bemagic-header__logo js-header-item">BEMagic (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</div>
                <div class="bemagic-header__item bemagic-header__themes js-header-item js-header-themes"></div>
            </div>
            <div class="bemagic-app__sidebar">
                <div class="bemagic-menu js-menu"></div>
            </div>
            <div class="bemagic-app__pages js-pages ${namespace}${config.themeClass}"></div>
        </div>
    `);

    $('.js-bemagic-app-template').attr('data-theme-class', namespace + config.themeClass);

    //----------------------------------------------------------------------
    //-- Add additional sylesheets and header items to toggle them
    //----------------------------------------------------------------------

    config.additionalStylesheets.forEach(function(obj) {
        const $link = $('<link>')
            .attr('href', obj.href)
            .attr('rel', 'stylesheet')
            .attr('data-stylesheet', obj.href);

        const $headerItem = $('<div>')
            .addClass('bemagic-header__item bemagic-header__link is-active js-stylesheet-toggle')
            .attr('data-stylesheet-ref', obj.href)
            .text(`Toggle ${obj.name}`);

        $('.js-header').append($headerItem);
        $('.js-bemagic-app-template').prepend($link);
    });

    //----------------------------------------------------------------------
    //-- Add theme-toggle header items
    //----------------------------------------------------------------------

    const cn = namespace + config.themeClass;
    const $theme = $(`<div>`)
        .addClass(`bemagic-header__theme bemagic-theme-button js-background-toggle is-active ${cn}`)
        .attr('data-class', cn);
    $('.js-header-themes').append($theme);

    for (const theme of themesGlobal) {
        const $theme = $('<div>')
            .addClass(`bemagic-header__theme bemagic-theme-button js-background-toggle ${cn}--${theme}`)
            .attr('data-class', `${cn}--${theme}`);
        $('.js-header-themes').append($theme);
    }

    Object.keys(components).forEach(function(c, index) {
        const activeClass = index === 0 ? 'is-active' : '';
        const component = components[c];
        const cn = namespace + c;
        const descendants = Object.keys(component.descendants);
        const modifiers = Object.keys(component.modifiers);
        const themes = Object.keys(component.themes);
        const tag = utils.getTag(config, component.atRules, c);


        //----------------------------------------------------------------------
        //-- Add page and menu link for component
        //----------------------------------------------------------------------

        // Add a menu link for each c
        const $menuItem = $('<div>')
            .text(c)
            .addClass(`bemagic-menu__link js-menu-link ${activeClass}`)
            .attr('data-page', c);

        // Add a page container for each c
        const $page = $('<div>')
            .addClass(`bemagic-app__page bemagic-page js-page js-${cn} ${activeClass}`)
            .attr('data-page', c);


        //----------------------------------------------------------------------
        //-- Composed example (extracted from bemagic.html file living next to component.)
        //----------------------------------------------------------------------

        const template = getComponentTemplateFile(componentsPath, c);
        if (template) {
            const $heading = $(`<div>`)
                .addClass(`bemagic-page__heading bemagic-page-heading`)
                .text(`Composed example`);

            const $explain = $(`<div>`)
                .addClass('bemagic-page-heading__explain')
                .text(`extracted from ${config.componentsFolder}/${c}/bemagic.html`);

            const $section = $(`<div>`)
                .addClass(`bemagic-page__section js-page-section`)
                .attr('data-class', `section-${cn}-full`);

            $heading.append($explain);
            $section.append($(template));
            $page.append($heading);
            $page.append($section);
        }


        //----------------------------------------------------------------------
        //-- Component (block)
        //----------------------------------------------------------------------

        const $heading = utils.getPageHeadingMarkup($, config, namespace, themes, cn);
        const $section = utils.getPageSectionMarkup($, config, component, tag, cn, cn);
        $page.append($heading);
        $page.append($section);


        //----------------------------------------------------------------------
        //-- Variations (block--modifier)
        //----------------------------------------------------------------------

        modifiers.forEach(function(m) {
            const modifier = component.modifiers[m];
            const themes = Object.keys(modifier.themes);
            const $heading = utils.getPageHeadingMarkup($, config, namespace, themes, `${cn}--${m}`);
            const $section = utils.getPageSectionMarkup($, config, modifier, tag, `${cn}--${m}`, `${cn} ${cn}--${m}`);
            $page.append($heading);
            $page.append($section);
        });


        //----------------------------------------------------------------------
        //-- Descendants (block__element)
        //----------------------------------------------------------------------

        descendants.forEach(function(d) {
            const descendant = component.descendants[d];
            const modifiers = Object.keys(descendant.modifiers);
            const themes = Object.keys(descendant.themes);
            const tag = utils.getTag(config, descendant.atRules, d);
            const $heading = utils.getPageHeadingMarkup($, config, namespace, themes, `${cn}__${d}`);
            const $section = utils.getPageSectionMarkup($, config, descendant, tag, `${cn}__${d}`, `${cn}__${d}`);
            $page.append($heading);
            $page.append($section);

            //----------------------------------------------------------------------
            //-- Descendant variations (block__element--modifier)
            //----------------------------------------------------------------------

            modifiers.forEach(function(m) {
                const modifier = descendant.modifiers[m];
                const themes = Object.keys(modifier.themes);
                const $heading = utils.getPageHeadingMarkup($, config, namespace, themes, `${cn}__${d}--${m}`);
                const $section = utils.getPageSectionMarkup($, config, modifier, tag, `${cn}__${d}--${m}`, `${cn}__${d} ${cn}__${d}--${m}`);
                $page.append($heading);
                $page.append($section);
            });
        });

        $('.js-pages').append($page);
        $('.js-menu').append($menuItem);
    });

    return $.html();
};
