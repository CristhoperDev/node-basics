//required
const fs = require('fs');

let base = 2;

let data = '';
for (let i = 1; i<=10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile(`files/table-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`The file table-${base}.txt has been saved!`);
});
