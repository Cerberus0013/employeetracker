const inquirer = require('inquirer')
const Choice = require('inquirer/lib/objects/choice')



function employeeChartNavigation () {

    inquirer.prompt ([
        {
            type: 'list',
            name: 'directory',
            message: 'Please pick an option',
            choices: ['view all departments','view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }

    ]).then((choice) => {
      if (choice.directory === "view all departments"){
      
        console.log("showing all departments");
      //*allDepartments()

       } else if (choice.directory === 'view all roles'){

        console.log('showing all roles')
        //*allRoles()
       } else if(choice.directory === 'view all employees'){

        console.log('showing all employees')

        //*allEmployees

       } else if(choice.directory === 'add a department'){
          console.log('adding to department')
          
          //* addADepartment
       } else if(choice.directory === 'add a role'){

        console.log('adding a role')

        //*addARole
       } else if (choice.directory === 'add an employee'){

        console.log('adding an employee')

        //*addAnEmployee()
       } else{
           console.log("updating employee")
           //*unpdateAnEmployeeRole
        }

    })

}




employeeChartNavigation()