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

    const config = global.config || {};
    const prefix = config.namespace ? `${config.namespace}-` : '';
    const base = elementName ? `${blockName}__${elementName}` : blockName;
    const modifier = modifierName ? ` ${prefix}${base}--${modifierName}` : '';
    const state = stateName ? ` ${stateName}` : '';

    return `${prefix}${base}${modifier}${state}`;
};
