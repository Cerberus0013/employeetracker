const mysql = require("mysql2");


const db = mysql.createConnection(
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


module.exports = db;