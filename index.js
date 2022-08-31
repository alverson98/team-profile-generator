//imports
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

// Team member questions - manager, engineer, intern, & add another employee
// Manager questions
const managerQuestions = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the manager's ID?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the manager's email address?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "managerOfficeNumber",
  },
];

// Engineer questions
const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineer's ID?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is the engineer's email address?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "engineerGithub",
  },
];

// Intern questions
const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the intern's ID?",
    name: "internID",
  },
  {
    type: "input",
    message: "What is the intern's email address?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "internSchool",
  },
];

// Add another employee question
const anotherEmployeeQuestion = [
  {
    type: "list",
    message: "Select another team member, or press 'None'",
    choices: ["Engineer", "Intern", "None"],
    name: "newEmployee",
  },
];

//empty array to add team members
const arrayTeamMembers = [];

// function to initialize application
function init() {
  // call manager function since each team requires a manager
  promptManagerQ();
}

// ask manager questions
function promptManagerQ() {
  inquirer.prompt(managerQuestions).then((responses) => {
    //declaring variables to pass as arguments
    let name = responses.managerName;
    let id = responses.managerID;
    let email = responses.managerEmail;
    let officeNumber = responses.managerOfficeNumber;

    //new manager object
    const manager = new Manager(name, id, email, officeNumber);

    //adding manager to team member array
    arrayTeamMembers.push(manager);

    //call function to add employee
    addAnotherEmployee();
  });
}

// ask if they want to add an employee
function addAnotherEmployee() {
  inquirer.prompt(anotherEmployeeQuestion).then((responses) => {
    //add switch statement based on user response
  });
}

// ask engineer questions
function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((responses) => {
    //declaring variables to pass as arguments
    let name = responses.engineerName;
    let id = responses.engineerID;
    let email = responses.engineerEmail;
    let github = responses.engineerGithub;

    //new engineer object
    const engineer = new Engineer(name, id, email, github);

    //adding engineer to team member array
    arrayTeamMembers.push(engineer);

    //call function to add employee
    addAnotherEmployee();
  });
}

// ask intern questions
function promptIntern() {
  inquirer.prompt(internQuestions).then((responses) => {
    //declaring variables to pass as arguments
    let name = responses.internName;
    let id = responses.internID;
    let email = responses.internEmail;
    let school = responses.internSchool;

    //new intern object
    const intern = new Intern(name, id, email, school);

    //adding intern to team member array
    arrayTeamMembers.push(manager);

    //call function to add employee
    addAnotherEmployee();
  });
}
