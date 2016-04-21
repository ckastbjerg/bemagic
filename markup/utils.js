'use strict';

// Returns a string of html attributes (e.g. for"something" id="myid")
module.exports.getAttributes = function(config, atRules) {
    let attributes = '';

    if (!atRules) {
        return attributes;
    }

    Object.keys(atRules).forEach(function(rule) {
        if (config.attributes[rule]) {
            attributes += ` ${rule}="${atRules[rule]}"`;
        }
    });

    return attributes;
};

module.exports.getText = function(config, atRules) {
    if (!atRules) {
        return config.text;
    } else {
        // text might be '' which is why we can't just access it directly
        return atRules['text'] !== undefined ? atRules['text'] : config.text;
    }
};

// Returns string. Either 1. user-specified tag, or 2. tag from config file, 3. div
module.exports.getTag = function(config, atRules, componentName) {
    let tag = 'div';

    if (atRules['tag']) {
        tag = atRules['tag'];

    } else if (config.tags[componentName]) {
        tag = config.tags[componentName];
    }

    if (tag === 'a') {
        tag += ' href="#"';
    }

    return tag;
};

// Returns a heading including information about themeing for a component variation
module.exports.getPageHeadingMarkup = function($, config, themeClass, backgroundClass, themes, cn) {
    const $heading = $(`<div>`)
        .addClass(`bemagic-page__heading bemagic-page-heading`)
        .text(`${cn}`);

    if (themes.length > 0) {
        const $element = $(`<div>`)
            .addClass(`bemagic-page-heading__explain`)
            .text('Styled for themes: ');

        $heading.append($element);
    } else {
        const $element = $(`<div>`)
            .addClass(`bemagic-page-heading__explain`)
            .text('Has no theme specific styles');

        $heading.append($element);
    }

    themes.forEach(function(theme) {
        let themeName = theme;
        if (theme !== config.themeClass) {
            themeName = `${themeClass}--${theme}`;
        }

        const $element = $(`<div>`)
            .addClass(`bemagic-theme-button bemagic-theme-button--small ${themeName} ${backgroundClass} js-page-theme`)
            .attr('data-section-ref', cn)
            .attr('data-theme', themeName);

        $heading.append($element);
    });

    return $heading;
};

module.exports.getPageSectionMarkup = function($, config, themeClass, backgroundClass, part, tag, dataClass, classes) {
    const pseudoStates = Object.keys(part.pseudoStates);
    const states = Object.keys(part.states);
    const mixedStates = Object.keys(part.mixedStates);
    const attributes = module.exports.getAttributes(config, part.atRules);
    const isInput = tag === 'input';
    const text = module.exports.getText(config, part.atRules);
    const value = `value="${text}"`;

    let section = `<div class="bemagic-page__section js-page-section ${backgroundClass}" data-class="${dataClass}">`;

    let markup = `
        <${tag} ${attributes} ${isInput ? value : ''} class="${classes}">
            ${!isInput ? text : ''}
        </${tag}>
    `;

    states.forEach(function(state) {
        // FIXME: hack for issuu button, this should be handled properly in parser but doesn't work currently
        if (mixedStates.join('').indexOf(state) !== -1) { return; }
        const value = `value="${state}"`;
        markup += `
            <${tag} ${attributes} ${isInput ? value : ''} class="${classes} is-${state}">
                ${!isInput ? state : ''}
            </${tag}>
        `;
    });

    pseudoStates.forEach(function(state) {
        const value = `value="${state}"`;
        const disabled = state === 'disabled' ? state : '';
        markup += `
            <${tag} ${attributes} ${isInput ? value : ''} ${disabled} class="${classes} pseudo-${state}">
                ${!isInput ? state : ''}
            </${tag}>
        `;
    });

    mixedStates.forEach(function(s) {
        const states = part.mixedStates[s];
        const disabled = states.pseudo === 'disabled' ? states.pseudo : '';
        const value = `value="${states.state}:${states.pseudo}"`;
        const allClasses = `${classes} pseudo-${states.pseudo} is-${states.state}`;

        markup += `
            <${tag} ${attributes} ${isInput ? value : ''} ${disabled} class="${allClasses}">
                ${!isInput ? `${states.state}:${states.pseudo}` : ''}
            </${tag}>
        `;
    });

    section = section + markup + '</div>';

    return $(section);
};
