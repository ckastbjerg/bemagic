const getComponentTemplateFile = require('../../utils/getComponentTemplateFile');

module.exports = componentName => {
    const template = getComponentTemplateFile(componentName);
    if (!template) { return ''; }

    const config = global.config;
    const backgroundClass = config.backgroundClass ? `${config.namespace}-${config.backgroundClass}` : '';
    const dataClass = config.namespace ? `${config.namespace}-${componentName}` : componentName;

    return `
        <div class="bemagic-page__heading bemagic-page-heading">
            Composed example
            <div class="bemagic-page-heading__explain">
                extracted from ${config.componentsFolder}/${componentName}/bemagic.html
            </div>
        </div>
        <div
            class="bemagic-page__section js-page-section ${backgroundClass}"
            data-class="section-${dataClass}-full"
        >
            ${template}
        </div>
    `;
};
