//* Packages for the application

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./readme_file_generation");

//* array of questions for user input

const questions = [
  //# title
  {
    type: "input",
    name: "title",
    message: " Name of the Project?",
  },
  //# description
  {
    type: "input",
    name: "description",
    message: "Purpose of the this project?",
  },
  //# section
  {
    type: "input",
    name: "features",
    message: "List some cool features and sections about this project here.",
  },
  //# table of contents
  {
    type: "input",
    name: "link",
    message: "table of contents here"
  },
  //#licence
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  //# usage
  {
    type: "input",
    name: "usage",
    message:
      "usage of this project.",
  },
  //# contributors
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  //# test
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
  //# questions
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
];

// *Generating README.md File

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// *Function for Initializing app

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./readme_folder/README.md", generateMarkdown({ ...responses }));
  });
}
init();
