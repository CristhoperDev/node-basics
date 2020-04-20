const argv = require('yargs')
    .command('list', 'Print in console multiply table', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            alias: 'l',
            default: 10
        }
    })
    .command('create', 'Create file with multiply table', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { createFile, listTable } = require('./multiply/multiply');

let command = argv._[0];
switch (command) {
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`File created: ${file}`))
            .catch(err => console.log(err));

        break;
    default:
        console.log('Unrecognized command')
}
//console.log(argv);

//console.log(argv.base);

