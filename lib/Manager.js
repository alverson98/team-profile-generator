// Subclass of Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //calling parent constructor function for certain parameters
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  //needs to override employee role
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
