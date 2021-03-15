DROP DATABASE IF EXISTS employee;
CREATE DATABASE employee;
USE employee;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) UNIQUE NOT NULL 
    );

CREATE TABLE role (
    id INT UNSIGNED NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR (30),
    salary DECIMAL,
    departmentId INT UNSIGNED,
    FOREIGN KEY (departmentId) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT UNSIGNED NOT NULL auto_increment PRIMARY KEY,
    firstName VARCHAR (30),
    lastName VARCHAR (30),
    roleId INT UNSIGNED,
    managerId INT UNSIGNED,
    FOREIGN KEY (roleId) REFERENCES role(id),
    FOREIGN KEY (managerId) REFERENCES role(id)
);