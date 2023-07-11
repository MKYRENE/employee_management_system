-- Insert departments
INSERT INTO
    department ( name)
VALUES
    ('Sales');

INSERT INTO
    department ( name)
VALUES
    ('Engineering');

-- Insert roles
INSERT INTO
    role (title, salary, department_id)
VALUES
    ('Manager', 50000, 1);

INSERT INTO
    role (title, salary, department_id)
VALUES
    ('Salesperson', 40000, 1);

INSERT INTO
    role (title, salary, department_id)
VALUES
    ('Engineer', 60000, 2);

-- Insert employees
INSERT INTO
    employee
    (first_name,
    last_name,
    role_id,
    manager_id
)
VALUES
    ('John', 'Doe', 1, NULL);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Jane', 'Smith', 2, 1);