module.exports = ({ themes, themeClass, backgroundClass }) => `
    <div class="bemagic-header__item bemagic-header__themes js-header-item js-header-themes">
        Themes
        <div
            class="bemagic-header__theme bemagic-theme-button js-theme-toggle is-active"
            data-class="${themeClass}"
        ></div>
        ${Object.keys(themes).map(key => `
            <div
                class="bemagic-header__theme bemagic-theme-button js-theme-toggle ${themes[key].classes} ${backgroundClass}"
                data-class="${themes[key].classes}"
            ></div>
        `).join('')}
    </div>
`;
