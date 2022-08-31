const Employee = require("../lib/Employee");

// Subclass of Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    //parameters provided by parent constructor function
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  //Overrides employee role
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
