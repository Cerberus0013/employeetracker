const inquirer = require("inquirer");
const { additonalDepartments } = require("../db/db");
const db = require("../db/db");
//const Department = require('./newdepartment')

//class DirectoryNav{

async function viewDepartments() {
  //I am presented with a formatted table showing department names and department ids
  const departments = await db.allDepartments();
  console.table(departments);
}

async function viewRoles() {
  //I am presented with the job title, role id, the department that role belongs to, and the salary for that role
  const roles = await db.allRoles();
  console.table(roles);
}

async function viewEmployees() {
  // I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  const employees = await db.allEmployees();
  console.table(employees);
}

async function addADepartment() {
  const department = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the name of the Department",
      },
    ])
    await db.additonalDepartments(department)
       console.log( `Added:${department.name}`)
      //employeeChartNavigation();
        
      //     //   console.info("answer:", department);
      //     //finish interpolation, then send back to connection to send into db
    };


async function addARole() {
  const departments =  await db.allDepartments()
  const departmentChoices = departments.map(({id, name}) => ({
    name: name,
    value: id
  }))  
  const role = await inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Please enter this role's Title?",
      },
      {
        type: "input",
        name: "salary",
        message: "Please enter this role's salary?",
      },
      {
        type: "list",
        name: "department_id",
        message: "Please enter this role's department?",
        choices: departmentChoices
      },
    ])
     await db.additionalRoles(role)
     console.log(`Added an aditional Role: ${role.title}`)
    
  }

      //  am prompted to enter the name, salary, and department for the role and that role is added to the database

  //finish interpolation, then send back to connection to send into db
  // "INSERT INTO role (title, salary, department_id)";
  // `VAlUES (${answers.title}, ${newrole.salary}, ${newrole.department_id}`;


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
        name: "role",
        message: "What is the employee's role?",
        choice:
      },
      {
        type: "input",
        name: "manager_id",//allemployees, to assign a manager
        message: "Who is the employee's Manager?",
        choice:
      },
    ])
    .then((answers) => {
      console.info("add Employee answers:", answers);
      // I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
      console.log(
        `VAlUES (${answers.firstname}, ${answers.lastname}, ${answers.role_id}, ${answers.manager_id})`
      );
    });
  //*finish interpolation, then send back to connection to send into db
  // ("INSERT INTO employee (fisrt_name, last_name, role_id, manager_id)");
  // (`VAlUES (${answers.firstname}, ${answers.lastname}, ${answers.role_id}, ${answers.manager_id}`);
}

function updateAnEmployeeRole() {
  // I am prompted to select an employee to update and their new role and this information is updated in the database
  //*choose an employee
  //*get answers into array
  //*interpolate into update command
  //* insert into db
}

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addADepartment,
  addARole,
  addAnEmployee,
  //updateAnEmployeeRole,
};
