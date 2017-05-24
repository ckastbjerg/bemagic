const getElementMarkup = require('../utils/getElementMarkup');

module.exports = components => {
    Object.keys(components).map(componentName => {
        const component = components[componentName];
        const elements = {};

        Object.keys(component.elements).forEach(elementName => {
            const element = component.elements[elementName];
            const parent = element.atRules.parent;
            if (parent) {
                elements[parent] = elements[parent] || {};
                elements[parent].children = elements[parent].children || [];
                elements[parent].children.push(element);
            } else {
                elements[elementName] = Object.assign({}, elements[elementName] || {}, element);
            }
        });

        let innerHtml = '';
        if (component.tagName === 'select') {
            innerHtml = '<option>Option 1</option><option>Option 2</option>';
        } else {
            Object.keys(elements).forEach(elementName => {
                const element = elements[elementName];
                const children = element.children
                    ? element.children.map(child => child.markup).join('')
                    : null;
                const markup = getElementMarkup({
                    atRules: element.atRules,
                    blockName: componentName,
                    tagName: element.tagName,
                    elementName: element.name,
                    children,
                });

                innerHtml += markup;
            });
        }

        components[componentName] = Object.assign({}, component, {
            derivedExample: getElementMarkup({
                atRules: component.atRules,
                blockName: componentName,
                tagName: component.tagName,
                children: innerHtml,
            }),
        });
    });

    return components;
};
