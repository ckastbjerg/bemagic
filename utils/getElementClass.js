'use strict';

module.exports = function({
    blockName = null,
    elementName = null,
    modifierName = null,
    stateName = null,
}) {
    if (!blockName) {
        throw new Error('Missing required argument: blockName');
    }

    const block = elementName ? `${blockName}__${elementName}` : blockName;
    const modifier = modifierName ? ` ${block}--${modifierName}` : '';
    const state = stateName ? ` ${stateName}` : '';

    return `${block}${modifier}${state}`;
};
