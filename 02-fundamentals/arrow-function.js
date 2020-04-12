// function add(a, b) {
//     return a + b;
// }

// let add = (a, b) => a + b;

// function greet() {
//     return 'Hello World';
// }

// let greet = () => 'Hello World';

// function greet(name) {
//     return `Hello ${name}`;
// }

//let greet = (name) => `Hello ${name}`;

// console.log(greet('Cristhoper'));

// console.log(add(10, 20));

let deadpool = {
    name: 'Wade',
    lastname: 'Winston',
    power: 'Regeneration',
    getName() {
        return `${this.name} ${this.lastname} - power ${this.power}`;
    }
}

console.log(deadpool.getName())