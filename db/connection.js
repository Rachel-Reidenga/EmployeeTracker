const mysql =require("mysql2");
let table = require("console.table");

const connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee"
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;