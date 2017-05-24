const stripIndents = require('common-tags/lib/stripIndents');

module.exports = function({ systemName, components }) {
    const numComponents = components.length;
    const TOC = components.map((componentName, index) =>
        `${index + 1}. [${componentName}](${componentName})\n`
    ).join('');

    return stripIndents`
        ## Components

        There are currently **${numComponents} components** in the \`${systemName}\` design system.

        ${TOC}

        For detailed information about using or contributing to ${systemName}, please refer
        to the [naming conventions](NAMING_CONVENTIONS.md).

        <sub>
            This readme was generated using
            [bemagic](https://github.com/ckastbjerg/bemagic) - a development tool created
            at [issuu](https://issuu.com/about).
        </sub>
    `;
};
