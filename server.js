const inquirer = require("inquirer");

const db = require("./db/db");

function employeeChartNavigation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "directory",
        message: "Please pick an option",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((choice) => {
      
      if (choice.directory === "view all departments") {
        //console.log("showing all departments");
        viewDepartments();
       //nextAction(); 
         //return employeeChartNavigation();
      } else if (choice.directory === "view all roles") {
        //console.log("showing all roles");
        viewRoles()
       
      } else if (choice.directory === "view all employees") {
        //console.log("showing all employees");
        viewEmployees();
          //nextAction()
      } else if (choice.directory === "add a department") {
        //console.log("adding to department");
        addADepartment()
        
      } else if (choice.directory === "add a role") {
      
        addARole();
    
      } else if (choice.directory === "add an employee") {
        //console.log("adding an employee");
        addAnEmployee()
       //nextAction();
      } else if (choice.directory ===  "update an employee role"){
        console.log("updating employee");
        unpdateAnEmployeeRole();
        //nextAction(); 
      }
    });
   
}

employeeChartNavigation();




//const Department = require('./newdepartment')

//class DirectoryNav{

async function viewDepartments() {
  //I am presented with a formatted table showing department names and department ids
  const departments = await db.allDepartments();
  console.table(departments);
  nextAction();
}

async function viewRoles() {
  //I am presented with the job title, role id, the department that role belongs to, and the salary for that role
  const roles = await db.allRoles();
  console.table(roles);
  nextAction();
}

async function viewEmployees() {
  // I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  const employees = await db.allEmployees();
  console.table(employees);
  nextAction();
}

async function addADepartment() {
  const department = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the name of the Department",
    },
  ]);
  await db.additonalDepartments(department);
  console.log(`Added:${department.name}`);

  nextAction();
  //     //   console.info("answer:", department);
  //     //finish interpolation, then send back to connection to send into db
}

async function addARole() {
  const departments = await db.allDepartments();
  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  const role = await inquirer.prompt([
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
      choices: departmentChoices,
    },
  ]);
  await db.additionalRoles(role);
  console.log(`Added:${role.title}`);

  nextAction();
}

//  am prompted to enter the name, salary, and department for the role and that role is added to the database

//finish interpolation, then send back to connection to send into db
// "INSERT INTO role (title, salary, department_id)";
// `VAlUES (${answers.title}, ${newrole.salary}, ${newrole.department_id}`;

async function addAnEmployee() {
  const roles = await db.allRoles();
  const companyRoles = roles.map(({ id, title, salary, department_id }) => ({
    department_id: department_id,
    salary: salary,
    name: title,
    value: id,
  }));
  const managers = await db.allEmployees();
  const selectedManager = managers.map(({ id, first_name, last_name }) => ({
    value: id,
    name: first_name + " " + last_name,
  }));
  const employee = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employees first name?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?",
    },
    {
      type: "list",
      name: "role_id",
      message: "What is the employee's role?",
      choices: companyRoles,
    },
    {
      type: "list",
      name: "manager_id", //allemployees, to assign a manager
      message: "Who is the employee's Manager?",
      choices: selectedManager,
    },
  ]);
  await db.additionalEmployee(employee);
  console.log(`Added:${employee.first_name}`);

  nextAction();
}
// I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

//finish interpolation, then send back to connection to send into db
// ("INSERT INTO employee (fisrt_name, last_name, role_id, manager_id)");
// (`VAlUES (${answers.firstname}, ${answers.lastname}, ${answers.role_id}, ${answers.manager_id}`);

function updateAnEmployeeRole() {
  // I am prompted to select an employee to update and their new role and this information is updated in the database
  //*choose an employee
  //*get answers into array
  //*interpolate into update command
  //* insert into db
}

function nextAction() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "yesOrNo",
        message: "Would you like do something else?",
        default: false,
      },
    ])
    .then((answer) => {
      if (answer.yesOrNo) {
        return employeeChartNavigation();
      } else {
        return console.log("Bye!, Have a Beautiful Time");
      }
    });
}






