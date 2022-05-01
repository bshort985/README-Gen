// TODO: Include packages needed for this application

const fs = require("fs");
const generatePage = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const { inherits } = require("util");

// TODO: Create an array of questions for user input


const questions = [
    // Project Title
    {
        type: 'input',
        name: 'project title',
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
      // Description section - create an array to hold the what, why, and how
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of the project. (Requried)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please provide a description.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'motovation',
        message: 'What was the motovation for this project?'
      },
      {
        type: 'input',
        name: 'problem',
        message: 'What problem did this project solve?'
      },
      {
        type: 'input',
        name: 'lesson',
        message: 'What lessons did you learn form this project?'
      }, 
      {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps needed for installation. (Requried)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please provide installation steps.');
            return false;
          }
        }
      }, 
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Select the license that was used.',
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License","Boost Software License 1.0", "Unlicense" ]
      },
      {
        type: 'confirm',
        name: 'contributers',
        message: 'Where there any other contributers on this project?',
        default: false
      },
    
   ];





// TODO: Create a function to write README file
const writeToFile = content => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./generatedREADME.md', content, err => {
          if (err) {
              reject(err);
              return;
          }
          resolve({
              ok: true
          });
      });
  });
};



 // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(answer){
      const content = generatePage(answer);
      writeToFile(content);
    });
};

// Function call to initialize app
init()

