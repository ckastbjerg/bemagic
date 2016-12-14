const HeaderBackgrounds = require('./components/HeaderBackgrounds');
const HeaderStyles = require('./components/HeaderStyles');
const HeaderThemes = require('./components/HeaderThemes');
const Menu = require('./components/Menu');
const Page = require('./components/Page');

module.exports = function({ css, components = {}, themes = {} }) {
    const config = global.config;
    const backgrounds = config.backgroundClass ? components[config.backgroundClass] : {};
    const namespace = config.namespace ? `${config.namespace}-` : '';
    const themeClass = config.themeClass ? `${namespace}${config.themeClass}` : '';
    const backgroundClass = config.backgroundClass ? `${namespace}${config.backgroundClass}` : '';

    return `
        <div
            class="bemagic-app js-bemagic-app-template"
            data-theme-class="${namespace + config.themeClass}"
            data-background-class="${namespace + config.backgroundClass}"
        >
            ${config.additionalStylesheets.map(styleSheet => `
                <link href="${styleSheet.href}" rel="stylesheet" data-stylesheet="${styleSheet.href}">
            `)}
            <style>${css}</style>
            <div class="bemagic-app__header bemagic-header js-header">
                <div class="bemagic-header__logo js-header-item">BEMagic (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</div>
                ${HeaderThemes({ themes, themeClass, backgroundClass })}
                ${HeaderBackgrounds({ backgrounds, backgroundClass })}
                ${HeaderStyles(config.additionalStylesheets)}
            </div>
            <div class="bemagic-app__sidebar">
                ${Menu(components)}
            </div>
            <div class="bemagic-app__pages js-pages ${themeClass} ${backgroundClass}">
                ${Object.keys(components).map(name =>
                    Page(components[name])
                ).join('')}
            </div>
        </div>
    `;
};
