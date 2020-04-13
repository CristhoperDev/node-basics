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

let getEmployee = async(id) => {

    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
        throw new Error(`Do not exists an employee with ID ${id}`);
    } else {
        return employeeDB;
    }
};

let getSalary = async(employee) => {

    let salaryDB = salary.find(salary => salary.id === employee.id);

    if (!salaryDB) {
        throw new Error(`Do not exists salary for user ${employee.name}`);
    } else {
        return {
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id
        };
    }
};

let getInformation = async(id) => {
    let employee = await getEmployee(id);
    let salary = await getSalary(employee);

    return `The salary of ${salary.name} is $${salary.salary}`;
};

getInformation(2)
    .then(message => console.log(message))
    .catch(err => console.log(err));