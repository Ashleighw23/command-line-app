const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is installation?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What is contributing",
  },
  {
    type: "input",
    name: "usage",
    message: "What is usage?",
  },
  {
      type: "input",
      name: "credits",
      message: "What is credits?",
  },
  {
    type: "list",
    name: "license",
    message: "What is license?",
    choices: ["MIT", "BSD 3", "APACHE 2.0"],
  },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    fs.writeFileSync(path.join(__dirname,"/READMe.md"),generateMarkdown(answers),"utf8");
});