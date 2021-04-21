  INSERT INTO department (name)
VALUES ('Human Resources'),
('Engineering'),
('Accounting'),
('Maintenance');


  INSERT INTO role (title, salary, department_id )
VALUES('Computer Engineer', 55.00, 2),
('Human Resource clerk', 30.00, 1),
('Accountant', 40.00, 3),
('Maintenance Associate', 25.00, 4);

  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Harry', 'Johnson', 1, NULL),
('Peter', 'Tickler', 3, NULL),
('Ben', 'Dover', 2, NULL),
('Herb', 'Ottam', 4, NULL),
('Eaton', 'Belfie', 1, NULL);
