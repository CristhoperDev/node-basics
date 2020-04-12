// setTimeout(() => {
//     console.log('Hello World');
// }, 3000);

let getUserById = (id, callback) => {
    let user = {
        name: 'Cristhoper',
        id
    };

    if (id === 20) {
        callback(`User with id ${id}, do not exists on database`);
    } else {
        callback(null, user);
    }
};

getUserById(1, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('User on database', user);
});