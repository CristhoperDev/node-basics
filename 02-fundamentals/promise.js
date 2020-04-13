let employees = [{
    id: 1,
    name: 'Cristhoper'
}, {
    id: 2,
    name: 'Melisa'
}, {
    id: 3,
    name: 'Juan'
}];

let salary = [{
    id: 1,
    salary: 1000
}, {
    id: 2,
    salary: 2000
}];

let getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        let employeeDB = employees.find(employee => employee.id === id);

        if (!employeeDB) {
            reject(`Do not exists an employee with ID ${id}`);
        } else {
            resolve(employeeDB);
        }
    });
};

let getSalary = (employee => {
    return new Promise((resolve, reject) => {
        let salaryDB = salary.find(salary => salary.id === employee.id);

        if (!salaryDB) {
            reject(`Do not exists salary for user ${employee.name}`);
        } else {
            resolve({
                name: employee.name,
                salary: salaryDB.salary,
                id: employee.id
            });
        }
    });
});

getEmployee(3).then(employee => {

    getSalary(employee).then((response) => {
        console.log(`The salary of ${response.name} is $${response.salary}`);
    }, (err) => console.log(err));

}, (err) => console.log(err));