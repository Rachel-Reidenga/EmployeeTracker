const inquirer = require("inquirer");
let Database = require("./db");
let tabel = require("console.table");

const db = new Database({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "password",
    database: "schema"
});

async function getManagerNames() {
    let query = "SELECT * FROM employee WHERE managerId IS NULL";
    const rows = await db.query(query);
    
    let employeeNames = [];
    for(const employee of rows) {
        employeeNames.push(employee.firstName + " " + employee.lastName);
    }
    return employeeNames;
}

async function getRoles() {
    let query = "SELECT title FROM role";
    const rows = await db.query(query);

    let roles = [];
    for(const row of rows) {
        roles.push(row.title);
    }

    return roles;
}

async function getDepartmentNames() {
    let query = "SELECT name FROM department";
    const rows = await db.query(query);

    let departments = [];
    for(const row of rows) {
        departments.push(row.name);
    }

    return departments;
}

async function getDepartmentId(departmentName) {
    let query = "SELECT * FROM department WHERE department.name=?";
    let args = [departmentName];
    const rows = await db.query(query, args);
    return rows[0].id;
}

async function getRoleId(roleName) {
    let query = "SELECT * FROM role WHERE role.title=?";
    let args = [roleName];
    const rows = await db.query(query, args);
    return rows[0].id;
}



main();