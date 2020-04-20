//required
const fs = require('fs');

let createFile = (base) => {
    return new Promise(((resolve, reject) => {
        if (!Number(base)){
            reject(`The entered value ${base} is not a number`);
            return;
        }
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`files/table-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`table-${base}.txt`);
        });

    }));
}

module.exports = {
    createFile
}
