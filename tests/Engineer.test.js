const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("should create an engineer object including name, id, email, and github", () => {
    const engineer = new Engineer(
      "Hannah",
      10,
      "hannah@example.com",
      "githubUsername"
    );

    expect(engineer.name).toEqual("Hannah");
    expect(engineer.id).toEqual(10);
    expect(engineer.email).toEqual("hannah@example.com");
    expect(engineer.github).toEqual("githubUsername");
    expect(typeof engineer).toEqual("object");
  });

  describe("getGithub", () => {
    it("should get github username from getGithub method", () => {
      const github = "githubUsername";
      const engineer = new Engineer("Hannah", 10, "hannah@example.com", github);

      expect(engineer.getGithub()).toEqual(github);
    });
  });

  // Overridden to return Engineer
  describe("getRole", () => {
    it("should return 'Engineer' from getRole method", () => {
      const engineer = new Engineer(
        "Hannah",
        10,
        "hannah@example.com",
        "githubUsername"
      );

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
