// Include packages needed for this application
const userInput = require('./Assets/userInput');
const generateSvg = require('./Assets/generateMarkdown');
const fs = require('fs'); 

// const generateShape = require('./Assets/generateShape');
// const generateSvg = require('./Assets/generateShape');


function init () {
  // Calls user input prompt
  userInput()
  
  // Generates .SVG format and then writes it to a file.
    .then((response) => {
      //// console.log(response);
      const svgData = generateSvg(response);

      fs.writeFile("./your_logo/logo.svg", svgData, (err) => 
      err ? console.log(err) : console.log('Successfully created your Logo in the file "/your_logo"!')
      )
    });
  };

  init();