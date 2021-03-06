//required
const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {
    console.log('=========================='.green);
    console.log(`========table of ${base}========`.green);
    console.log('=========================='.green);
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let createFile = (base, limit = 10) => {
    return new Promise(((resolve, reject) => {
        if (!Number(base)) {
            reject(`The entered value ${base} is not a number`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`files/table-${base}-to-${limit}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`table-${base}-to-${limit}.txt`);
        });

    }));
}

module.exports = {
    createFile,
    listTable
}
