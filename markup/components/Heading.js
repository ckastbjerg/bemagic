const ThemeButton = require('./ThemeButton');

module.exports = ({ componentName, themes = [] }) => {
    return `
        <div class="bemagic-page__heading bemagic-page-heading">
            ${componentName}
            <div class="bemagic-page-heading__explain">
                ${Object.keys(themes).length > 0 ? 'Styled for themes:' : 'Has no theme specific styles'}
            </div>
            ${Object.keys(themes).map(key => ThemeButton({
                componentName,
                themeName: themes[key].name,
                themeClasses: themes[key].classes,
            })).join('')}
        </div>
    `;
};
