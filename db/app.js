const inquirer = require('inquirer');
const connection = require('./connection'); // Import the connection object

// Destructure the required functions from the connection object
const { viewAllDepartments, viewAllRoles, viewAllEmployees, addDepartment, addRoles, addEmployee, updateEmployeeRole } = require('./connection');


//This code sets up the initial prompt using Inquirer and handles the user's selected actions by calling the respective functions from the connection.js file.

// Function to prompt the user for the desired action
function promptUser() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          console.log('Exiting Employee Tracker...');
          connection.end();
          process.exit(0);
        default:
          console.log('Invalid action.');
          promptUser();
      }
    });
}

//Function to start the app
function startApp() {
  console.log('Welcome to Employee Tracker!');
  promptUser();
}

// Starting point of the application
startApp();