let name = 'Deadpool';
let real = 'Wade Wilson';

// console.log(name + ' ' + real);
// console.log(`${name} ${real}`);

// let fullname = name + ' ' + real;
// let fullnameTemplae = `${name} ${real}`;

// console.log(fullname === fullnameTemplae);

function getName() {
    return `${name} ${real}`
}

console.log(`The name of: ${getName()}`);