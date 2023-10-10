// Include packages needed for this application
// const generateLogo = require('./generateLogo');
const inquirer = require('inquirer'); 
const fs = require('fs')

const shapes = ['Square', 'Circle', 'Triangle'];

// Array of questions to ask the user
const questionsArr =[
'Please provide 3 letters for the text of your logo:',
'Please provide a color for the text:',
'Please provide a shape for your logo:',
'Please provide a color for the shape:', 
]

// Create a prompt script
const promptQuestions= [
    { 
      type: 'input',
      name: 'letters',
      message: questionsArr[0],
    },
    { 
      type: 'input',
      name: 'txtColor',
      message: questionsArr[1],
    },
    { 
      type: 'list',
      name: 'shape',
      choices: shapes,
      message: questionsArr[2],
    },
    { 
      type: 'input',
      name: 'shpColor',
      message: questionsArr[3],
    },
  ];

// Create function to initialize the prompt script and save as an SVG file called logo.svg.
function init() {
  inquirer.prompt(promptQuestions)
  .then((response) => {
    const fileName = './your_logo/logo.svg';

    fs.writeFile(fileName, JSON.stringify(response, null, 2), (err) => {
      if(err){
        console.log(err)
      } else {
        console.log("Success write to file! Check the 'your_logo' folder.")
      }
    });
})
};


init(); 