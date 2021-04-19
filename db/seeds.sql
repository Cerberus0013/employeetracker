  INSERT INTO department (name)
VALUES ('Human Resources'),
('Engineering'),
('Accounting'),
('Maintenance');


  INSERT INTO role (title, salary, department_id )
VALUES('Computer Engineer', 55.00, 2),
('Human Resource clerk', 35.00, 1),
('Accountant', 40.00, 3),
('Maintenance Associate', 25.00, 4);

  INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('harry', 'johnson', 1, NULL),
('peter', 'paulson', 3, NULL),
('larry', 'cableson', 2, NULL),
('sally', 'rayson', 1, NULL);
