const getComponentTemplateFile = require('../../utils/getComponentTemplateFile');

module.exports = ({ derivedExample, name }) => {
    const config = global.config;
    const template = getComponentTemplateFile(name);
    const backgroundClass = config.backgroundClass ? `${config.namespace}-${config.backgroundClass}` : '';
    const dataClass = config.namespace ? `${config.namespace}-${name}` : name;

    const explanatoryText = template
        ? `extracted from ${config.componentsFolder}/${name}/bemagic.html`
        : 'sophisticated guess regarding the components composition';

    return `
        <div class="bemagic-page__heading bemagic-page-heading">
            ${template ? 'Composed example' : 'Derived example'}
            <div class="bemagic-page-heading__explain">
                ${explanatoryText}
            </div>
        </div>
        <div
            class="bemagic-page__section js-page-section ${backgroundClass}"
            data-class="section-${dataClass}-full"
        >
            ${template || derivedExample}
        </div>
    `;
};
