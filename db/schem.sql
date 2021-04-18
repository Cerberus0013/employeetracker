

DROP TABLE IF EXISTS employee;

DROP TABLE IF EXISTS role;

DROP TABLE IF EXISTS department;


CREATE TABLE employee(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name_first VARCHAR(30) NOT NULL,
  name_first VARCHAR(30) NOT NULL,
  foreign key for role_id
  foreign key for manager_id

);


CREATE TABLE role(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  foreign key for department id
);

CREATE TABLE department(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);