const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'Print in console multiply table', options)
    .command('create', 'Create file with multiply table', options)
    .help()
    .argv;

module.exports = {
    argv
};
