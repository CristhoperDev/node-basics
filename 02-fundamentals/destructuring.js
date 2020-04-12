let deadpool = {
    name: 'Wade',
    lastname: 'Winston',
    power: 'Regeneration',
    getNombre: function() {
        return `${this.name} ${this.lastname} - power ${this.power}`;
    }
}

// let name = deadpool.name;
// let lastname = deadpool.lastname;
// let power = deadpool.power;

let { name: firstname, lastname, power } = deadpool;
console.log(firstname, lastname, power);