const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("should create an intern object including name, id, email, and school", () => {
    const intern = new Intern("Hannah", 10, "hannah@example.com", "DU");
    expect(intern.name).toEqual("Hannah");
    expect(intern.id).toEqual(10);
    expect(intern.email).toEqual("hannah@example.com");
    expect(intern.school).toEqual("DU");
    expect(typeof intern).toEqual("object");
  });

  describe("getSchool", () => {
    it("should get intern's school from getSchool method", () => {
      const school = "DU";
      const intern = new Intern("Hannah", 10, "hannah@example.com", school);

      expect(intern.getSchool()).toEqual(school);
    });
  });

  // Overridden to return 'Intern'
  describe("getRole", () => {
    it("should return 'Intern' from getRole method", () => {
      const intern = new Intern("Hannah", 10, "hannah@example.com", "DU");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
