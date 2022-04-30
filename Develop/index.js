// TODO: Include packages needed for this application

const fs = require("fs");
const generatePage = require("");
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input


const questions = () => { 
    return inquirer.prompt([
    // Project Title
    {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project?(Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your the title of your project!');
              return false;
            }
          }
      },
      // Description session - create an array to hold the what, why, and how
      {
        type: 'input',
        name: 'name',
        message: 'What was the motovation for this project?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What problem did this project solve?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What lessons did you learn form this project?'
      },
   ]);
};



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


