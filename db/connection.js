const mysql = require('mysql2');
const inquirer = require('inquirer');

// Creating a connection to the database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  database: 'employee_db',
}).promise();

// Function to view all departments
async function viewAllDepartments() {
  try {
    const [rows] = await connection.query('SELECT * FROM department');
    console.table(rows);
    promptUser();
  } catch (error) {
    console.error(error);
  }
}

// Function to view all roles
async function viewAllRoles() {
  try {
    const [rows] = await connection.query('SELECT * FROM role');
    console.table(rows);
    promptUser();
  } catch (error) {
    console.error(error);
  }
}

// Function to view all employees
async function viewAllEmployees() {
  try {
    const [rows] = await connection.query('SELECT * FROM employee');
    console.table(rows);
    promptUser();
  } catch (error) {
    console.error(error);
  }
}

// Function to add a department
async function addDepartment() {
  try {
    const department = await inquirer.prompt([
      {
        name: 'name',
        type: 'input',
        message: 'Enter the name of the department:',
      },
    ]);
    const [result] = await connection.query('INSERT INTO department SET ?', department);
    console.log('Department added successfully!');
    promptUser();
  } catch (error) {
    console.error(error);
  }
}

// Function to add a role
async function addRole() {
  try {
    const departments = await connection.query('SELECT * FROM department');
    const departmentChoices = departments[0].map((department) => ({
      name: department.name,
      value: department.id,
    }));

    const role = await inquirer.prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the role:',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for the role:',
      },
      {
        name: 'department_id',
        type: 'list',
        message: 'Select the department for the role:',
        choices: departmentChoices,
      },
    ]);

    const [result] = await connection.query('INSERT INTO role SET ?', role);
    console.log('Role added successfully!');
    promptUser();
  } catch (error) {
    console.error(error);
  }
}

// Function to add an employee
async function addEmployee() {
  try {
    const roles = await connection.query('SELECT * FROM role');
    const roleChoices = roles[0].map((role) => ({
      name: role.title,
      value: role.id,
    }));

    const employees = await connection.query('SELECT * FROM employee');
    const managerChoices = employees[0].map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));
    managerChoices.unshift({ name: 'None', value: null });

    const employee = await inquirer.prompt([
      {
        name: 'first_name',
        type: 'input',
        message: "Enter the employee's first name:",
      },
      {
        name: 'last_name',
        type: 'input',
        message: "Enter the employee's last name:",
      },
      {
        name: 'role_id',
        type: 'list',
        message: "Select the employee's role:",
        choices: roleChoices,
      },
      {
        name: 'manager_id',
        type: 'list',
        message: "Select the employee's manager:",
        choices: managerChoices,
      },
    ]);

    const [result] = await connection.query('INSERT INTO employee SET ?', employee);
    console.log('Employee added successfully!');
    promptUser();
  } catch (error) {
    console.error(error);
  }
}

// Function to update an employee's role
async function updateEmployeeRole() {
  try {
    const employees = await connection.query('SELECT * FROM employee');
    const employeeChoices = employees[0].map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));

    const roles = await connection.query('SELECT * FROM role');
    const roleChoices = roles[0].map((role) => ({
      name: role.title,
      value: role.id,
    }));

    const employeeToUpdate = await inquirer.prompt([
      {
        name: 'employee_id',
        type: 'list',
        message: 'Select the employee to update:',
        choices: employeeChoices,
      },
      {
        name: 'role_id',
        type: 'list',
        message: 'Select the new role for the employee:',
        choices: roleChoices,
      },
    ]);

    await connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [
      employeeToUpdate.role_id,
      employeeToUpdate.employee_id,
    ]);

    console.log('Employee role updated successfully!');
    promptUser();
  } catch (error) {
    console.error(error);
  }
}

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
        'Exit',
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

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};



//**********COMMENTS/NOTES FOR MYSELF TO REFERENCE ********
//Update the host, port, user, password, and database values according to my MySQL configuration. 
//This code establishes the connection to the database and exports the connection object for use 
//in other files.