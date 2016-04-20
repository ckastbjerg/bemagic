'use strict';

const chalk = require('chalk');
const getElementClass = require('./getElementClass');

module.exports = function(opts) {
    if (!opts) {
        throw new Error(chalk.yellow('No `opts` supplied: ', opts));
    }

    if (!opts.component) {
        throw new Error(chalk.yellow('Required option `component` not supplied in `opts`: ', opts));
    }

    const classes = getElementClass(opts);
    const attributes = opts.attributes ? ` ${opts.attributes}` : '';
    const tag = opts.tag || 'div';
    const children = opts.children || '…';

    return `<${tag}${attributes} class="${classes}">${children}</${tag}>`;
};
