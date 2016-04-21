'use strict';

const getElementMarkup = require('../utils/getElementMarkup');
const getCurrentDate = require('../utils/getCurrentDate');
const CONVENTIONS_FILE = '../CONVENTIONS.md';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getListString(list, word) {
    word = word || 'and';
    let markdown = '';

    list.forEach(function(item, index){
        markdown += `\`${item}\``;

        if (index === list.length - 2) {
            markdown += ` ${word} `;
        } else if (index === list.length - 1) {
            markdown += '.';
        } else {
            markdown += ', ';
        }
    });

    return markdown;
}

function getBlockquote(text) {
    return `> ${text}\n\n`;
}

function getTitle(name, className) {
    return `## ${capitalizeFirstLetter(name)} \`${className}\` \n\n`;
}

function getDescription(description) {
    return `${description}.\n\n`;
}

function getNotice(notice) {
    return `<sub>${notice}.</sub>\n\n`;
}

function getTOCItem(title) {
    return `- **[${capitalizeFirstLetter(title)}](#${title.replace(/ /g, '-')})**\n`;
}

function getTag(config, element) {
    return element.atRules['tag'] || config.tags[element.name] || 'div';
}

function getThemesInfo(config, themes) {
    if (themes.length === 0) {
        return '';
    }

    let markdown = `Elements using this class will change appearance when used inside [theme](${CONVENTIONS_FILE}#theming) `;
    markdown += getListString(themes, 'or');

    return markdown + `\n`;
}

function getThemingMarkup(config, ns, c, tag) {
    let str = '';

    str += '```html \n';
    str += `<${tag} class="${ns}-${c} ${ns}-${config.themeClass}">…</${tag}>\n`;
    str += `<!-- or using nesting -->\n`;
    str += `<div class="${ns}-${config.themeClass}">\n`;
    str += `    <${tag} class="${ns}-${c}">…</${tag}>\n`;
    str += `</div>\n`;
    str += '``` \n\n';

    return str;
}

function getExampleMarkup(markup) {
    let str = '';

    str += '```html \n';
    str += `${markup}\n`;
    str += '``` \n\n';

    return str;
}

function getPseudoStatesInfo(states) {
    return states.length > 0 ? `\n\nThe component will react to ${getListString(states)} states\n\n` : '';
}

function getThemingExample(config, ns, c) {
    let tag = config.tags[c] || 'div';
    let markdown = '';

    markdown += `The \`${ns}-${c}\` supports [\`theming\`](${CONVENTIONS_FILE}) and can change its appearance when paired with the \`${ns}-${config.themeClass}\` class. Note however, that themes may apply only for parts of the component.\n`;
    markdown += getThemingMarkup(config, ns, c, tag);
    markdown += '\n';

    return markdown;
}

function getSectionTitle(name) {
    let markdown = '';

    markdown += `\n<a name=${name}></a>\n`;
    markdown += `#### ${capitalizeFirstLetter(name)}\n\n`;

    return markdown;
}

function getClassTitle(name, isRequired) {
    let markdown = '';

    markdown += `<a name=${name.replace(/ /g, '')}></a>\n`;
    markdown += `#### \`${name}\` ${isRequired ? '(required)' : ''}\n\n`;

    return markdown;
}

/**
 * Generates a markdown table of modifiers
 * @param {object} modifiers - The modifiers of a component
 */
function getExample(markup) {
    let markdown = '';

    markdown += '```html \n';
    markdown += `${markup}\n`;
    markdown += '``` \n\n';

    return markdown;
}

function getOverviewRow(config, className, base, element, type) {
    let markdown = '';

    const states = Object.keys(element.states).length > 0 ? getListString(Object.keys(element.states)) : 'None';
    markdown += `| **[\`${className}\`](#${className.replace(/ /g, '')})** `;
    markdown += `| [${type}](${CONVENTIONS_FILE}#${type}s) `;
    markdown += `| ${states} `;
    markdown += `| ${base.atRules['tag'] || config.tags[base.name] || 'N/A'} `;

    return markdown + ' |\n';
}

/**
 * Generates a markdown table of modifiers
 * @param {object} modifiers - The modifiers of a component
 */
function getOverviewTable(config, ns, component) {
    let markdown = '';

    markdown += `| Class Name | Type | States | Tag |\n`;
    markdown += `|:-----|:-----|:-----|:-----|\n`;

    markdown += getOverviewRow(config, `${ns}-${component.name}`, component, component, 'component');

    Object.keys(component.modifiers).forEach(function(key) {
        const modifier = component.modifiers[key];
        markdown += getOverviewRow(config, `${ns}-${component.name}--${modifier.name}`, component, modifier, 'modifier');
    });

    Object.keys(component.descendants).forEach(function(key) {
        const descendant = component.descendants[key];
        markdown += getOverviewRow(config, `${ns}-${component.name}__${descendant.name}`, descendant, descendant, 'descendant');

        Object.keys(descendant.modifiers).forEach(function(key) {
            const modifier = descendant.modifiers[key];
            markdown += getOverviewRow(config, `${ns}-${component.name}__${descendant.name}--${modifier.name}`, descendant, modifier, 'modifier');
        });
    });

    markdown += '\n\n';

    return markdown;
}

function getElementsTable(elements) {
    let markdown = '';

    markdown += `| Name | Description |\n`;
    markdown += `|:-----|:-----|\n`;

    Object.keys(elements).forEach(function(key) {
        const element = elements[key];
        markdown += `| **\`${element.name}\`** `;
        markdown += `| ${element.atRules['description'] || 'N/A'} | \n`;
    });

    markdown += '\n\n';

    return markdown;
}

function getSpecifications(element) {
    let markdown = '';

    Object.keys(element.atRules).forEach(function(rule) {
        if (rule === 'description' || rule === 'summary' || rule === 'intro') { return; }
        markdown += `- **${capitalizeFirstLetter(rule)}:** ${element.atRules[rule]}\n`;
    });

    return markdown;
}

module.exports = function(config, component, exampleMarkup) {
    const ns = config.namespace;
    let intro = '';
    let TOC = '###### Table of contents\n\n';
    let markdown = '\n';

    intro += getTitle(component.name, `${ns}-${component.name}`);

    if (component.atRules['intro']) {
        intro += getBlockquote(component.atRules['intro']);
    }

    TOC += getTOCItem('usage');

    markdown += getSectionTitle('Usage');
    if (exampleMarkup) {
        markdown += getExample(exampleMarkup);
    } else {
        markdown += getExample(getElementMarkup({
            component: `${ns}-${component.name}`,
            tag: getTag(config, component),
        }));
    }

    // FIXME: should be checking theming for all modifiers and descendants also
    if (Object.keys(component.themes).length > 0) {
        TOC += getTOCItem('theming');
        markdown += getSectionTitle('Theming');
        markdown += getThemingExample(config, ns, component.name);
        markdown += getNotice(`See the [Component Overview](#component-overview) for more details`);
    }

    if (Object.keys(component.modifiers).length > 0) {
        const exampleElement = component.modifiers[Object.keys(component.modifiers)[0]];

        TOC += getTOCItem('modifiers');
        markdown += getSectionTitle('modifiers');
        markdown += getDescription(`The ${component.name} component makes use of [\`modifiers\`](${CONVENTIONS_FILE}#modifiers) to alter its appearance`);
        markdown += getExampleMarkup(getElementMarkup({
            component: `${ns}-${component.name}`,
            modifier: exampleElement.name,
            tag: getTag(config, exampleElement),
        }));
        markdown += '#####All component `modifiers`\n';
        markdown += getElementsTable(component.modifiers);
        markdown += getNotice(`See the [Component Overview](#component-overview) for more details`);
    }

    if (Object.keys(component.states).length > 0) {
        const exampleElement = component.states[Object.keys(component.states)[0]];

        TOC += getTOCItem('states');
        markdown += getSectionTitle('states');
        markdown += getDescription(`The ${component.name} component can use [\`states\`](${CONVENTIONS_FILE}#states) for certain conditions.`);
        markdown += getExampleMarkup(getElementMarkup({
            component: `${ns}-${component.name}`,
            state: `is-${exampleElement.name}`,
            tag: getTag(config, component),
        }));
        markdown += '#####All component `states`\n';
        markdown += getElementsTable(component.states);
        markdown += getNotice(`See the [Component Overview](#component-overview) for more details`);
    }

    if (Object.keys(component.descendants).length > 0) {
        const exampleElement = component.descendants[Object.keys(component.descendants)[0]];

        TOC += getTOCItem('descendants');
        markdown += getSectionTitle('descendants');
        markdown += getDescription(`The ${component.name} has [\`descendants\`](${CONVENTIONS_FILE}#descendants) that can be appended to the component`);
        markdown += getExampleMarkup(getElementMarkup({
            component: `${ns}-${component.name}`,
            element: exampleElement.name,
            tag: getTag(config, exampleElement),
        }));
        markdown += '#####All component `descendants`\n';
        markdown += getElementsTable(component.descendants);
        markdown += getNotice(`See the [Component Overview](#component-overview) for more details`);
    }

    TOC += getTOCItem('component overview');
    markdown += getSectionTitle('Component Overview');
    markdown += getOverviewTable(config, ns, component);


    // Component
    markdown += getClassTitle(`${ns}-${component.name}`, component.atRules['required']);
    markdown += component.atRules['description'] ? getBlockquote(component.atRules['description']) : '*This class could use a description...*\n';
    markdown += getExample(getElementMarkup({
        component: `${ns}-${component.name}`,
        tag: getTag(config, component),
        children: component.atRules['type'],
    }));

    if (config.themeClass !== component.name) {
        markdown += getThemesInfo(config, Object.keys(component.themes));
    }
    markdown += getPseudoStatesInfo(Object.keys(component.pseudoStates));

    const specs = getSpecifications(component);
    if (specs) {
        markdown += '###### Specifications\n\n';
        markdown += specs;
    }

    markdown += `\n----------\n`;

    // Component modifiers
    Object.keys(component.modifiers).forEach(function(modifierName) {
        const modifier = component.modifiers[modifierName];
        markdown += getClassTitle(`${ns}-${component.name}--${modifierName}`, modifier.atRules['required']);
        markdown += modifier.atRules['description'] ? getBlockquote(modifier.atRules['description']) : '*This class could use a description...*\n';
        markdown += getExample(getElementMarkup({
            component: `${ns}-${component.name}`,
            modifier: modifierName,
            tag: getTag(config, component),
        }));

        if (config.themeClass !== component.name) {
            markdown += getThemesInfo(config, Object.keys(modifier.themes));
        }

        const specs = getSpecifications(modifier);
        if (specs) {
            markdown += '###### Specifications\n\n';
            markdown += specs;
        }

        markdown += `\n----------\n`;
    });

    // Descendants
    Object.keys(component.descendants).forEach(function(elementName) {
        const descendant = component.descendants[elementName];

        markdown += getClassTitle(`${ns}-${component.name}__${elementName}`, descendant.atRules['required']);
        markdown += descendant.atRules['description'] ? getBlockquote(descendant.atRules['description']) : '*This class could use a description...*\n';
        markdown += getExample(getElementMarkup({
            component: `${ns}-${component.name}`,
            element: elementName,
            tag: getTag(config, descendant),
        }));
        markdown += getThemesInfo(config, Object.keys(descendant.themes));

        markdown += '###### Specifications\n\n';
        markdown += getSpecifications(descendant);

        markdown += `\n----------\n`;

        // Descendant modifiers
        Object.keys(descendant.modifiers).forEach(function(modifierName) {
            const modifier = descendant.modifiers[modifierName];

            markdown += getClassTitle(`${ns}-${component.name}__${elementName}--${modifierName}`, modifier.atRules['required']);
            markdown += modifier.atRules['description'] ? getBlockquote(modifier.atRules['description']) : '*This class could use a description...*\n';
            markdown += getExample(getElementMarkup({
                component: `${ns}-${component.name}`,
                modifier: modifierName,
                tag: getTag(config, modifier),
            }));
            markdown += getThemesInfo(config, Object.keys(modifier.themes));

            markdown += '###### Specifications\n\n';
            markdown += getSpecifications(modifier);

            markdown += `\n----------\n`;
        });
    });

    TOC += getTOCItem('contributing');
    markdown += getSectionTitle('Contributing');
    markdown += getDescription(`Please view the **[contribution guidelines](${CONVENTIONS_FILE})** before modifying this component`);

    let res = '';
    res += intro;
    res += TOC;
    res += markdown;

    return res;
};
