module.exports = components => `
    <div class="bemagic-menu js-menu">
        ${Object.keys(components).map((componentName, index) => {
            const activeClass = index === 0 ? 'is-active' : '';
            return `
                <div
                    class="bemagic-menu__link js-menu-link ${activeClass}"
                    data-page="${componentName}"
                >
                    ${componentName}
                </div>
            `;
        }).join('')}
    </div>
`;
