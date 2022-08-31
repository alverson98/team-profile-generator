const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("creates an employee object that contains name, id, and email", () => {
    const employee = new Employee("Hannah", 10, "hannah@example.com");

    expect(employee.name).toEqual("Hannah");
    expect(employee.id).toEqual(10);
    expect(employee.email).toEqual("hannah@example.com");
  });

  describe("getName", () => {
    it("gets employee's name", () => {});
  });

  describe("getId", () => {
    it("gets employee's id", () => {});
  });

  describe("getEmail", () => {
    it("gets employee's email", () => {});
  });

  describe("getRole", () => {
    it("gets employee's role", () => {});
  }); //Returns 'Employee'
});
