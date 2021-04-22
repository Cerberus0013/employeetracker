const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  allDepartments() {
    return this.connection.query("SELECT * FROM department");
    nextAction();
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
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id"
    );
  }

  additonalDepartments(department){
     return this.connection.query(
      "INSERT INTO department SET ?", 
      department   
    );
  }
  additionalRoles(role){
    return this.connection.query(
      "INSERT INTO role SET ?", 
      role 
    ) 
  }
  additionalEmployee(employee){
 return this.connection.query(
      "INSERT INTO employee SET ?",
      employee
    ) 
  }

  updateExistingEmployee(){

  }

}




module.exports = new DB(connection);
