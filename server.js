const inquirer = require('inquirer')



function employeeChartNavigation () {

    inquirer.prompt ([
        {
            type: 'list',
            name: 'directory',
            message: 'Please pick an option',
            choices: ['view all departments',' view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }

    ])

}




employeeChartNavigation()