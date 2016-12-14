module.exports = ({ backgrounds, backgroundClass }) => `
    <div class="bemagic-header__item bemagic-header__themes js-header-item js-header-backgrounds">
        ${backgrounds && backgroundClass !== '' && `
            Background
            <div
                class="bemagic-header__theme bemagic-theme-button js-background-toggle is-active ${backgroundClass}"
                data-class="${backgroundClass}"
            ></div>

            ${Object.keys(backgrounds.modifiers).map(background => `
                <div
                    class="bemagic-header__theme bemagic-theme-button js-background-toggle ${backgroundClass} ${backgroundClass}--${background}"
                    data-class="${backgroundClass}--${background}"
                ></div>
            `).join('')}
        `}
    </div>
`;
