const sectionTitle = require('../utils').sectionTitle;

module.exports = markup => {
    return `
        ${sectionTitle('Usage')}
        ${markup}
    `;
};
