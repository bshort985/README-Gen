const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT"){
    badge = "https://img.shields.io/npm/l/inquirer";
  } else if (license === "Apache License 2.0"){
    badge = "https://img.shields.io/badge/license-Apache2.0-brightgre"
  }else if (license === "GNU AGPLv3"){
    badge = "https://img.shields.io/badge/license-GNUAGPLv3-orange"
  }else if (license === "Unlicense"){
    badge = "https://img.shields.io/badge/license-Unlicense-lightgrey"
  }else if (license === "None"){
    badge = ""
  }
  
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if(license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/"
  } else if (license === "Apache 2.0") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/"
  } else if (license === "GNU AGPLv3") {
    licenseLink = "https://choosealicense.com/licenses/agpl-3.0/"
  } else if (license === "Unlicense") {
    licenseLink = "https://choosealicense.com/licenses/unlicense/"
  }else if (license === "None") {
    licenseLink = ""
  }
  return licenseLink;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

//TODO: Create a function to generate markdown for README

function generateMarkdown(answer) {

  return `
  
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ### ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Description 
  ### ${answer.description}

  ## Motivation 
  ### ${answer.motovation}

  ## Problem
  ### ${answer.problem}

  ## Lessons Learned
  ### ${answer.lesson}

  ## Table of Contents:
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)

  ## Installation

  ### ${answer.installation}

  ## Usage

  ### ${answer.usage}

  ### Read the license here (Link)

  ## Contributors

  ### ${answer.contributers}

  ## Tests

  ### ${answer.test}

  ## Questions

  ### Github Repo ${answer.github}
  ### If you have any question please don't hesitate to reach out via email. My email is ${answer.email}

          

`;

}

module.exports = generateMarkdown;
