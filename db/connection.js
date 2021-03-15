const mysql =require("mysql2");
const inquirer = require("inquirer");
let table = require("console.table");

const connection = mysql.createConnection( {
    host: "localhost",
    port: 3001,
    user: "root",
    password: "password",
    database: "employee"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;