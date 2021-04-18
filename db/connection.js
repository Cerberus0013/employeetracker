const mysql = require("mysql2");
const util =require('util');

const connection = mysql.createConnection(
  {
    host: "localhost",
    //your SQL username,
    user: "root",
    //your mysqql password
    password: "MyNewPassword",
    database: "employeeDirectory",
  },
  console.log("Connected to the employeeDirector database.")
);
connection.connect();
connection.query = util.promisify(connection.query)

module.exports = connection;