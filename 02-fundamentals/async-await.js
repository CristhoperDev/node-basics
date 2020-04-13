// let getName = async() => {
//     throw new Error('User do not exist');
//     return 'Cristhoper';
// };

let getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cristhoper');
        }, 3000);
    });
};

let greet = async() => {
    let name = await getName()
    return `Hello ${name}`;
}

greet().then(message => {
    console.log(message);
});