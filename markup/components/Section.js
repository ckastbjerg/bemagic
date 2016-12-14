'use strict';

const getAttributes = require('../utils/getAttributes');
const getText = require('../utils/getText');

module.exports = function({
    atRules = {},
    classes = '',
    mixedStates = {},
    name = '',
    pseudoStates = {},
    states = {},
    tagName = 'div',
}) {
    const config = global.config;

    const attributes = getAttributes(atRules);
    const backgroundClass = config.backgroundClass ? `${config.namespace}-${config.backgroundClass}` : '';
    const isInput = tagName === 'input';
    const text = getText(atRules);
    const value = `value="${text}"`;

    return `
        <div class="bemagic-page__section js-page-section ${backgroundClass}" data-class="${name}">
            <${tagName} ${attributes} ${isInput ? value : ''} class="${classes}">
                ${!isInput ? text : ''}
            </${tagName}>
            ${Object.keys(states).map(state => {
                // FIXME: hack for issuu button, this should be handled properly in parser but doesn't work currently
                if (Object.keys(mixedStates).join('').indexOf(state) !== -1) { return; }
                const value = `value="${state}"`;

                return `
                    <${tagName} ${attributes} ${isInput ? value : ''} class="${classes} is-${state}">
                        ${!isInput ? state : ''}
                    </${tagName}>
                `;
            }).join('')}
            ${Object.keys(pseudoStates).map(state => {
                const value = `value="${state}"`;
                const disabled = state === 'disabled' ? state : '';
                return `
                    <${tagName} ${attributes} ${isInput ? value : ''} ${disabled} class="${classes} pseudo-${state}">
                        ${!isInput ? state : ''}
                    </${tagName}>
                `;
            }).join('')}
            ${Object.keys(mixedStates).map(state => {
                const states = mixedStates[state];
                const disabled = states.pseudo === 'disabled' ? states.pseudo : '';
                const value = `value="${states.state}:${states.pseudo}"`;
                const allClasses = `${classes} pseudo-${states.pseudo} is-${states.state}`;

                return `
                    <${tagName} ${attributes} ${isInput ? value : ''} ${disabled} class="${allClasses}">
                        ${!isInput ? `${states.state}:${states.pseudo}` : ''}
                    </${tagName}>
                `;
            }).join('')}
        </div>
    `;
};
