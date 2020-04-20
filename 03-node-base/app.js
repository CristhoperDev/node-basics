const { createFile } = require('./multiply/multiply');

let argv = process.argv;
let parameter = argv[2];
let base = parameter.split('=')[1];

createFile(base)
    .then(file => console.log(`File created: ${file}`))
    .catch(err => console.log(err));
