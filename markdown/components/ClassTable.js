module.exports = elements => {
    if (typeof elements !== 'object') {
        throw new Error('Parameter `elements` must be an object');
    }

    return `
        | Name | Description |
        |:-----|:-----|
        ${Object.keys(elements).map(key => {
            const element = elements[key];

            if (!element.name) {
                throw new Error('Each element must have a `name` property set');
            } else if (!element.atRules) {
                throw new Error('Each element must have an `atRules` property set');
            }

            return `| **\`${element.name}\`** | ${element.atRules['description'] || 'N/A'} |\n`;
        }).join('')}
    `;
};
