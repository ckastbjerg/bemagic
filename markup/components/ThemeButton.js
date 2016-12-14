module.exports = ({ themeName, themeClasses, componentName }) => {
    if (!themeName || !themeClasses || !componentName) {
        throw new Error('Argument()s missing');
    }
    const config = global.config;
    const backgroundClass = config.backgroundClass;

    return `
        <div
            class="bemagic-theme-button bemagic-theme-button--small ${themeClasses} ${backgroundClass} js-page-theme"
            data-section-ref="${componentName}"
            data-theme="${themeName}"
        >
        </div>
    `;
};
