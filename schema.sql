DROP DATABASE IF EXISTS schema;
CREATE DATABASE schema;
USE schema;

CREATE TABLE department (
    id INTEGER NOT NULL auto_increment PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INTEGER NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30);
    salary DECIMAL,
    departmentId INTEGER,
    FOREIGN KEY (departmentId) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER NOT NULL auto_increment PRIMARY KEY,
    firstName VARCHAR(30);
    lastName VARCHAR(30);
    roleId INTEGER,
    managerId INTEGER,
    FOREIGN KEY (roleId) REFERENCES role(id),
    FOREIGN KEY (managerId) REFERENCES role(id);
)