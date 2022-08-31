const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("should create a manager object including name, id, email, and officeNumber", () => {
    const manager = new Manager("Hannah", 10, "hannah@example.com", 25);

    expect(manager.name).toEqual("Hannah");
    expect(manager.id).toEqual(10);
    expect(manager.email).toEqual("hannah@example.com");
    expect(manager.officeNumber).toEqual(25);
    expect(typeof manager).toEqual("object");
  });

  describe("getOfficeNumber", () => {
    it("should get the manager's office number from getOfficeNumber method", () => {
      const officeNumber = 25;
      const manager = new Manager(
        "Hannah",
        10,
        "hannah@example.com",
        officeNumber
      );

      expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });
  });

  //Overridden to return 'Manager'
  describe("getRole", () => {
    it("should return 'Manager' from getRole method", () => {
      const manager = new Manager("Hannah", 10, "hannah@example.com", 25);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
