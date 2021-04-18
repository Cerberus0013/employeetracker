const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  allDepartments(){
      return this.connection.query("SELECT * FROM department");
  }
  allRoles(){
      return this.connection.query("SELECT * FROM role");

  }

  allEmployees(){
      return this.connection.query("SELECT * FROM employee");
  }
}

module.exports = new DB(connection);
