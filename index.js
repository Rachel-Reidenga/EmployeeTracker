const inquirer = require("inquirer");
let Database = require("./db");
let tabel = require("console.table");

const db = new Database({
    host: "localhost",
    
})