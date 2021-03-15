const mysql =require("mysql2");
const inquirer = require("inquirer");

const connection = mysql.createConnection( {
    host: "localhost",
    port: 3001,
    user: "root",
    password: "password",
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;