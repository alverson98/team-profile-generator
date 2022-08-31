const Employee = require("../lib/Employee");

// Subclass of Employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    //parameters from parent constructor function
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  //Overrides employee role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
