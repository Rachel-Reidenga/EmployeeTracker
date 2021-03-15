use employee;

INSERT into department (name) VALUES ("Sales");
INSERT into department (name) VALUES ("R and D");
INSERT into department (name) VALUES ("Design");
INSERT into department (name) VALUES ("IT");
INSERT into department (name) VALUES ("HR");

INSERT into role (title, salary, departmentId) VALUES ("Sales Lead", 90000, 1, NULL);
INSERT into role (title, salary, departmentId) VALUES ("Sales Team Member", 70000, 1);
INSERT into role (title, salary, departmentId) VALUES ("Researcher", 80000, 2);
INSERT into role (title, salary, departmentId) VALUES ("Designer", 80000, 3);
INSERT into role (title, salary, departmentId) VALUES ("IT Lead", 90000, 4);
INSERT into role (title, salary, departmentId) VALUES ("IT Team Memeber", 80000, 4);
INSERT into role (title, salary, departmentId) VALUES ("HR Rep", 70000, 5);

INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Cathy", "McFay", 1, NULL);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Renee", "Finch", 1, 1);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Pam", "Emm", 1, 1);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Dave", "Smith", 1, 1);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Justin", "Woodson", 2, 1);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Kelly", "Jane", 2, 1);

INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Faith", "Green", 3, NULL);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Brandi", "Lyn", 3, 3);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Kara", "Flowers", 3, 3);

INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Amanda", "Rodgers", 4, NULL);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Dale", "Jonson", 4, 4);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Jon", "Barns", 4, 4);
INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Emily", "Peterson", 4, 4);

INSERT into employee (firstName, lastName, roleId, managerId) VALUES ("Eirn", "Stone", 5, NULL);