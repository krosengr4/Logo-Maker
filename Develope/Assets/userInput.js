//! This is the js file to get the user input. 

const inquirer = require('inquirer'); 
const questions = require('./questions');

// Function to get user input and write that user input to a svg file. 
function userInput() {
    return inquirer.prompt(questions)
  };

module.exports = userInput;

//     .then((response) => {
//       const fileName = './your_logo/logo.svg';
  
//       fs.writeFile(fileName, JSON.stringify(response, null, 2), (err) => {
//         if(err){
//           console.log(err)
//         } else {
//           console.log("Success write to file! Check the 'your_logo' folder.")
//         }
//       });
//   })

