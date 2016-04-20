'use strict';

const chalk = require('chalk');

module.exports = function(opts) {
    if (!opts) {
        throw new Error(chalk.yellow('No `opts` supplied: ', opts));
    }

    if (!opts.component) {
        throw new Error(chalk.yellow('Required option `component` not supplied in `opts`: ', opts));
    }

    const base = opts.element ? `${opts.component}__${opts.element}` : opts.component;
    const variation = opts.modifier ? ` ${base}--${opts.modifier}` : '';
    const state = opts.state ? ` ${opts.state}` : '';

    return `${base}${variation}${state}`;
};
