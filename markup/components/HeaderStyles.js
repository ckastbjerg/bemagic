module.exports = styleSheets => `
    ${styleSheets.map(styleSheet => `
        <div
            class="bemagic-header__item bemagic-header__link is-active js-stylesheet-toggle"
            data-stylesheet-ref="${styleSheet.href}"
        >
            Toggle ${styleSheet.name}
        </div>
    `)}
`;
