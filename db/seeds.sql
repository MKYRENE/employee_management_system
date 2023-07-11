-- Insert departments
INSERT INTO department (id, name) VALUES (1, 'Sales');
INSERT INTO department (id, name) VALUES (2, 'Engineering');

-- Insert roles
INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Manager', 50000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Salesperson', 40000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Engineer', 60000, 2);

-- Insert employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'John', 'Doe', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Jane', 'Smith', 2, 1);
