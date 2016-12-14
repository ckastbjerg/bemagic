module.exports.capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

module.exports.description = text => {
    return `${module.exports.capitalize(text)}.`;
};

module.exports.menuItem = text => {
    return `- **[${module.exports.capitalize(text)}](#${text.replace(/ /g, '-')})**`;
};

module.exports.notice = text => {
    `<sub>${text}.</sub>`;
};

module.exports.title = ({ name, classes }) => {
    return `## ${module.exports.capitalize(name)} \`${classes}\``;
};

module.exports.sectionTitle = title => {
    if (typeof title !== 'string') {
        throw new Error('Parameter `title` must be a string');
    }

    return `
        <a name=${title}></a>
        #### ${module.exports.capitalize(title)}
    `;
};

module.exports.listString = ({ list, word = 'and' }) => {
    if (!list || list.constructor !== Array) {
        throw new Error(`Parameter \`list\` must be an array. Received: ${list}`);
    }

    let markdown = '';

    list.forEach((item, index) => {
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
};
