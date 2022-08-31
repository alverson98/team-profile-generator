const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("should create an employee object that contains name, id, and email", () => {
    const employee = new Employee("Hannah", 10, "hannah@example.com");

    expect(employee.name).toEqual("Hannah");
    expect(employee.id).toEqual(10);
    expect(employee.email).toEqual("hannah@example.com");
    expect(typeof employee).toEqual("object");
  });

  describe("getName", () => {
    it("should get employee's name from getName method", () => {
      const name = "Hannah";
      const employee = new Employee(name, 10, "hannah@example.com");

      expect(employee.getName()).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should get employee's id from getId method", () => {
      const id = 10;
      const employee = new Employee("Hannah", id, "hannah@example.com");

      expect(employee.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should get employee's email from getEmail method", () => {
      const email = "hannah@example.com";
      const employee = new Employee("Hannah", 10, email);

      expect(employee.getEmail()).toEqual(email);
    });
  });

  //Returns 'Employee'
  describe("getRole", () => {
    it("should return employee's role as 'Employee'", () => {
      const role = "Employee";
      const employee = new Employee("Hannah", 10, "hannah@example.com");

      expect(employee.getRole()).toEqual(role);
    });
  });
});
