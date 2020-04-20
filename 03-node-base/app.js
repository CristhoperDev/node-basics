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
    .help()
    .argv;
const { createFile } = require('./multiply/multiply');

let argv2 = process.argv;
console.log(argv.base);
console.log(argv.limit);
//let parameter = argv[2];
//let base = parameter.split('=')[1];

/*
createFile(base)
    .then(file => console.log(`File created: ${file}`))
    .catch(err => console.log(err));
*/
