const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  allDepartments(){
      return this.connection.query("SELECT * FROM department");
  }
  allRoles(){
      
  }
}

module.exports = new DB(connection);
