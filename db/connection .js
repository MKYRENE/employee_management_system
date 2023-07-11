const mysql = require('mysql2');

//Creating a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: '',
  database: 'employee_db',

}).promise();

// Function to view all roles
async function viewAllRoles() {
  try {
    const results = await connection.query('SELECT * FROM role');
    console.table(results[0]);
    promptUser();
  } catch (err) {
    console.error(err);
  }
}

// Export the function
module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRoles,
  addEmployee,
  updateEmployeeRole,
  // Other database query functions...
};



//**********COMMENTS/NOTES FOR MYSELF TO REFERENCE ********
//Update the host, port, user, password, and database values according to your MySQL configuration. This code establishes the connection to the database and exports the connection object for use in other files.