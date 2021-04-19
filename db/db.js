const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  allDepartments() {
    return this.connection.query("SELECT * FROM department");
  }
  allRoles() {
    //I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    return this.connection.query(
      "SELECT role.*, department.name FROM role LEFT JOIN department ON role.department_id = department.id"
    );
  }

  allEmployees() {

// I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    return this.connection.query(
      "SELECT * FROM employee LEFT JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id"
    );
  }
  
}

module.exports = new DB(connection);
