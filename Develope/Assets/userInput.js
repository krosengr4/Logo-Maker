//! This is the js file to get the user input. 

const inquirer = require('inquirer'); 
const questions = require('./questions');

// Function to get user input and write that user input to a svg file. 
function userInput() {
    return inquirer.prompt(questions)
  };

module.exports = userInput;


