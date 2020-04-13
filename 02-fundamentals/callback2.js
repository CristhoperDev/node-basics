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

let getEmployee = (id, callback) => {
    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
        callback(`Do not exists an employee with ID ${id}`);
    } else {
        callback(null, employeeDB);
    }
}

let getSalary = (employee, callback) => {
    let salaryDB = salary.find(salary => salary.id === employee.id);

    if (!salaryDB) {
        callback(`Do not exists salary for user ${employee.name}`);
    } else {
        callback(null, {
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id
        });
    }
}

getEmployee(1, (err, employee) => {
    if (err) {
        return console.log(err);
    };

    getSalary(employee, (err, response) => {
        if (err) {
            return console.log(err);
        };

        console.log(`The salary of ${response.name} is $${response.salary}`);
    });
});