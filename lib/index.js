const inquirer = require("inquirer");

//class DirectoryNav{

function allDepartments() {
  //I am presented with a formatted table showing department names and department ids
  "SELECT * FROM deparments;";
}

function allRoles() {
  //I am presented with the job title, role id, the department that role belongs to, and the salary for that role
  "SELECT * FROM roles;";
}

function allEmployees() {
  // I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  " SELECT * FROM employees";
}

function addADepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Please enter the name of the Department",
      },
    ])
    .then((answers) => {});

  // I am prompted to enter the name of the department and that department is added to the database
  ("INSERT INTO department (name)");
  ("VAlUES (${department.name}");
}

function addARole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please enter this role's Title?",
      },
      {
        type: "input",
        name: "slary",
        message: "Please enter this role's salary?",
      },
      {
        type: "input",
        name: "department",
        message: "Please enter this role's department?",
      },
    ])
    .then((answers) => {});
  //  am prompted to enter the name, salary, and department for the role and that role is added to the database

  ("INSERT INTO role (title, salary, department_id)");
  ("VAlUES (${role.title}, ${role.salary}, ${role.department_id}");
}

function addAnEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstname",
        message: "What is the employees first name?",
      },
      {
        type: "input",
        name: "lastname",
        message: "What is the employee's last name?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is the employee's role?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Who is the employee's Manager?",
      },
    ])
    .then((answers) => {});
  // I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

  ("INSERT INTO employee (fisrt_name, last_name, role_id, manager_id)");
  ("VAlUES (${employee.firstname}, ${employee.lastname}, ${employee.role_id}, ${employee.manager_id}");
}

//*function updateAnEmployeeRole(){
// I am prompted to select an employee to update and their new role and this information is updated in the database
//}

module.exports = {
  allDepartments,
  allRoles,
  allEmployees,
  addADepartment,
  addARole,
  addAnEmployee,
  //updateAnEmployeeRole,
};
