const { createFile } = require('./multiply/multiply');

let base = '5';

createFile(base)
    .then(file => console.log(`File created: ${file}`))
    .catch(err => console.log(err));
