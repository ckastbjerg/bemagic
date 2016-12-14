const utils = require('../utils');
const OverviewRow = require('./OverviewRow');

module.exports = component => {
    let markdown = '';

    markdown += utils.sectionTitle('Component Overview');
    markdown += '| Class Name | Type | States | Tag |\n';
    markdown += '|:-----|:-----|:-----|:-----|\n';

    markdown += OverviewRow({
        tag: component.tag,
        classes: component.classes,
        states: component.states,
        type: 'component',
    });

    Object.keys(component.modifiers).forEach(function(key) {
        const modifier = component.modifiers[key];

        markdown += OverviewRow({
            classes: modifier.classes,
            tag: component.tag,
            states: modifier.states,
            type: 'modifier',
        });
    });

    Object.keys(component.elements).forEach(function(key) {
        const element = component.elements[key];

        markdown += OverviewRow({
            classes: element.classes,
            tag: element.tag,
            states: element.states,
            type: 'element',
        });

        Object.keys(element.modifiers).forEach(function(key) {
            const modifier = element.modifiers[key];

            markdown += OverviewRow({
                classes: modifier.classes,
                tag: element.tag,
                states: modifier.states,
                type: 'modifier',
            });
        });
    });

    markdown += '\n\n';

    return markdown;
};
