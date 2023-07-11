# Employee Management System
Employee Tracker is a command-line application built with Node.js, Inquirer, and MySQL that allows business owners to view and manage their company's departments, roles, and employees.

## Description
This command-line application allows business owners to manage their company's departments, roles, and employees. With this Employee Management System, users can view and organize the company's information stored in a MySQL database.

## Walkthrough Video
Please refer to the [Walkthrough Video](link-to-your-walkthrough-video) for a demonstration of the application's functionality.

## Installation
To use the Employee Management System, follow these steps:
1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project folder.
3. Run 'npm init -y' to install the necessary dependencies
4. Run the command `npm install` to install the necessary dependencies.

## Usage
To run the application, follow these steps:
1. Ensure that you have a MySQL server running and create a database for the Employee Management System.
2. Update the database connection details in the `connection.js` file to match your MySQL server configuration.
3. Open a terminal and navigate to the project folder.
4. Run the command `node app.js` to start the application.
5. Follow the prompts to interact with the Employee Management System.
6. Choose from options such as viewing departments, roles, and employees, adding departments, roles, and employees, and updating employee roles.

## Database Schema
The Employee Management System uses the following database schema:
- `departments` table with columns: `id` (INT AUTO_INCREMENT), `name` (VARCHAR).
- `roles` table with columns: `id` (INT AUTO_INCREMENT), `title` (VARCHAR), `salary` (DECIMAL), `department_id` (INT).
- `employees` table with columns: `id` (INT AUTO_INCREMENT), `first_name` (VARCHAR), `last_name` (VARCHAR), `role_id` (INT), `manager_id` (INT).

## Additional Information
- The application uses the `Inquirer` package for the command-line interface and `mysql` package for database interactions.
- All options are presented as a menu, and user input is validated to ensure data integrity.
- The application provides formatted tables for viewing department, role, and employee information.
- When updating an employee's role, all available roles are dynamically retrieved from the database.

## License
This project is licensed under the [MIT License](LICENSE).
