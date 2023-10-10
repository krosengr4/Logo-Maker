// Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs')

const shapes = ['Square', 'Circle', 'Triangle'];

// Questions to ask the user. 
const promptQuestions= [
    { 
      type: 'input',
      name: 'text',
      message: 'Please Provide Text for your Logo (up to 3 letters):',
      validate: function(text) {
        return text.length <= 3 && text.length > 0; 
      },
    },
    { 
      type: 'input',
      name: 'textColor',
      message: 'Please Provide a Color for the Text:',
    },
    { 
      type: 'list',
      name: 'shape',
      choices: shapes,
      message: 'Please Provide a Shape for your Logo:',
    },
    { 
      type: 'input',
      name: 'shapeColor',
      message: 'Please Provide a Color for the Shape:',
    },
  ];

// Function to get user input and write that user input to a svg file. 
function init() {
  inquirer.prompt(promptQuestions)


//   .then((response) => {
//     const fileName = './your_logo/logo.svg';

//     fs.writeFile(fileName, JSON.stringify(response, null, 2), (err) => {
//       if(err){
//         console.log(err)
//       } else {
//         console.log("Success write to file! Check the 'your_logo' folder.")
//       }
//     });
// })
};


init(); 