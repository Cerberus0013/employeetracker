const inquirer = require("inquirer");
const {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addADepartment,
  addARole,
  addAnEmployee,
  //updateAnEmployeeRole,
} = require("./lib/index");


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
       ;
         //return employeeChartNavigation();
      } else if (choice.directory === "view all roles") {
        //console.log("showing all roles");
        viewRoles()
      } else if (choice.directory === "view all employees") {
        //console.log("showing all employees");
        viewEmployees()
      } else if (choice.directory === "add a department") {
        //console.log("adding to department");
        addADepartment();
      } else if (choice.directory === "add a role") {
      
        addARole();
      } else if (choice.directory === "add an employee") {
        //console.log("adding an employee");
        addAnEmployee()
      
      } else if (choice.directory ===  "update an employee role"){
        console.log("updating employee");
        unpdateAnEmployeeRole(); 
      }
    });
}

employeeChartNavigation();


module.exports = { employeeChartNavigation };

// switch(choices){

//   case 1: choice.directory === "view all departments'        
//         viewDepartments()
//           break;
        
//   case 2:choice.directory === "view all roles";      
//         viewRoles();
//         break;
//   case 3: choice.directory === "view all employees";
//         viewEmployees();
//         break;
//   case 4: choice.directory === "add a department";
//         addADepartment();
//         break;
//   case 5: choice.directory === "add a role";
//         addARole();
//         break;
//   case 6: choice.directory === "add an employee";        
//         addAnEmployee()
//         break;
//   case 7: choice.directory ===  "update an employee role"; 
//         unpdateAnEmployeeRole()
//         break;
//       }
   
