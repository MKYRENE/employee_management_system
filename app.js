const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRoles, addEmployee, updateEmployeeRole } = require('./connection'); // creating the connection 

//Function to prompt the unser for the desired action
function promptUser() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like todo ?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]

        })
}