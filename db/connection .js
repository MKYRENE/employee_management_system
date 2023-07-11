const mysql = require('mysql2');

//Creating a connection to the database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3000,
    user: 'root',
    password: '',
    database: 'employee_db',

});

// Function to view all departments
function viewAllDepartments() {
    connection.query('SELECT * FROM department', (err, results) => {
      if (err) throw err;
      console.table(results);
      promptUser();
    });
  }
  
  // Export the function
  module.exports = {
    viewAllDepartments,
    // Other database query functions...
  };
  

//**********COMMENTS/NOTES FOR MYSELF TO REFERENCE ********
//Update the host, port, user, password, and database values according to your MySQL configuration. This code establishes the connection to the database and exports the connection object for use in other files.