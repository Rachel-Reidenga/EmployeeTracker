const connection = require ("./connection");
const inquirer = require("inquirer");
const table = require("console.table");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
}

connection.connect(function(err) {
    if (err) throw err;
    start();
  });

  function start() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments:",
          "View all roles:",
          "View all employees:",
          "Add a department:",
          "Add a role:",
          "Add an employee:",
          "Update employee role:",
          "Exit"
        ]
      })
    .then(function(answer) {
        if (answer.action === 'View all departments:') {
            viewDepartments();
        } else if (answer.action === 'View all roles:') {
            viewRoles();
        } else if (answer.action === 'View all employees:') {
            viewEmployees();
        } else if (answer.action === 'Add a department:') {
            addDepartment();
        } else if (answer.action === 'Add a role:') {
            addRole();
        } else if (answer.action === 'Add an employee:') {
            addEmployee();
        } else if (answer.action === 'Update employee role:') {
            updateRole();
        }
        else if (answer.action === 'Exit') {
            connection.end();
        }
    })
    }

function viewDepartments() {
    var query = "SELECT * FROM department";
      connection.query(query, function(err, res) {
          console.log(`DEPARTMENTS:`)
          console.table(res);
        start();
        });
    };

function viewRoles() {
    var query = "SELECT * FROM role";
        connection.query(query, function(err, res) {
            console.log(`ROLES:`)
            console.table(res);
        start();
        });
    };

function viewEmployees() {
    var query = "SELECT * FROM employee";
        connection.query(query, function(err, res) {
            console.log(`EMPLOYEES:`)
            console.table(res);
        start();
        });
    };

function addDepartment() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What is the name of the new department?",
          })
        .then(function(answer) {
        var query = "INSERT INTO department (name) VALUES ( ? )";
        connection.query(query, answer.department, function(err, res) {
            console.log(`You have added this department: ${(answer.department).toUpperCase()}.`)
            console.table(res);
        })
        viewDepartments();
        })
}

function addRole() {
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw (err);
    inquirer
        .prompt([{
            name: "title",
            type: "input",
            message: "What is the title of the new role?",
          }, 
          {
            name: "salary",
            type: "input",
            message: "What is the salary of the new role?",
          },
          {
            name: "departmentName",
            type: "list",
            message: "Which department uses this role?",
            choices: function() {
                var choicesArray = [];
                return choicesArray;
              }
          }
          ]) 

        .then(function(answer) {
        const department = answer.departmentName;
        connection.query('SELECT * FROM DEPARTMENT', function(err, res) {
        
            if (err) throw (err);
         let filteredDept = res.filter(function(res) {
            return res.name == department;
        }
        )
        let id = filteredDept[0].id;
       let query = "INSERT INTO role (title, salary, departmentId) VALUES (?, ?, ?)";
       let values = [answer.title, parseInt(answer.salary), id]
       console.log(values);
       console.table(res);
        connection.query(query, values,
            function(err, res, fields) {
            console.log(`You have added this role: ${(values[0]).toUpperCase()}.`)
            // console.table(res);
        })
            viewRoles()
            })
        })
    })
}

async function addEmployee() {
    connection.query('SELECT * FROM role', function(err, result) {
        if (err) throw (err);
    inquirer
        .prompt([{
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?",
          }, 
          {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?",
          },
          {
            name: "roleName",
            type: "list",
            message: "What is the employee's role?",
            choices: function() {
             rolesArray = [];
                return rolesArray;
              }
          }
          ]) 

        .then(function(answer) {
        console.log(answer);
        // console.table(res);
        const role = answer.roleName;
        connection.query('SELECT * FROM role', function(err, res) {
            if (err) throw (err);
            let filteredRole = res.filter(function(res) {
                return res.title == role;
            })
        let roleId = filteredRole[0].id;
        connection.query("SELECT * FROM employee", function(err, res) {
                inquirer
                .prompt ([
                    {
                        name: "manager",
                        type: "list",
                        message: "Who is the manager?",
                        choices: function() {
                            managersArray = []
                            return managersArray;
                        }
                    }
                ]).then(function(managerAnswer) {
                    const manager = managerAnswer.manager;
                connection.query('SELECT * FROM employee', function(err, res) {
                if (err) throw (err);
                let filteredManager = res.filter(function(res) {
                return res.lastName == manager;
            })
            let managerId = filteredManager[0].id;
                    console.log(managerAnswer);
                    console.table(res);
                    let query = "INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES (?, ?, ?, ?)";
                    let values = [answer.firstName, answer.lastName, roleId, managerId]
                    console.log(values);
                    // console.table(res);
                     connection.query(query, values,
                         function(err, res, fields) {
                         console.log(`You have added employee: ${(values[0]).toUpperCase()}.`)
                         console.table(res);
                        })
                        viewEmployees();
                        })
                     })
                })
            })
        })
})
}

function updateRole() {
    connection.query('SELECT * FROM employee', function(err, result) {
        if (err) throw (err);
    inquirer
        .prompt([
          {
            name: "employeeName",
            type: "list",
            message: "Which employee's role is changing?",
            choices: function() {
             employeeArray = [];
                return employeeArray;
              }
          }
          ]) 

        .then(function(answer) {
        console.log(answer);
        console.table(res);
        const name = answer.employeeName;
        connection.query("SELECT * FROM role", function(err, res) {
                inquirer
                .prompt ([
                    {
                        name: "role",
                        type: "list",
                        message: "What is their new role?",
                        choices: function() {
                            rolesArray = [];
                            res.forEach(res => {
                                rolesArray.push(
                                    res.title)
                                
                            })
                            return rolesArray;
                        }
                    }
                ]).then(function(rolesAnswer) {
                    const role = rolesAnswer.role;
                    console.log(rolesAnswer.role);
                    console.table(res);
                connection.query('SELECT * FROM role WHERE title = ?', [role], function(err, res) {
                if (err) throw (err);
                    let roleId = res[0].id;
                    let query = "UPDATE employee SET roleId ? WHERE lastName ?";
                    let values = [roleId, name]
                    console.log(values);
                    console.table(res);
                     connection.query(query, values,
                         function(err, res, fields) {
                         console.log(`You have updated ${name}'s role to ${role}.`)
                         console.table(res);
                        })
                        viewEmployees();
                        })
                     })
                })
            
        
       })
})

}