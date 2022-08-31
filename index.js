//imports
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

// Team member questions - manager, engineer, & intern
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
