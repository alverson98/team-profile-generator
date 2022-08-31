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

// function to initialize application
function init() {
  // call manager function since each team requires a manager
  promptManagerQ();
}

// ask manager questions
function promptManagerQ() {
  inquirer.prompt(managerQuestions).then((responses) => {
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
    //call function to add employee
    addAnotherEmployee();
  });
}

// ask intern questions
function promptIntern() {
  inquirer.prompt(internQuestions).then((responses) => {
    //call function to add employee
    addAnotherEmployee();
  });
}
