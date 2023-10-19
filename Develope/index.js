// Include packages needed for this application
const userInput = require('./Assets/userInput');
const generateSvg = require('./Assets/generateMarkdown');
const fs = require('fs'); 

// const generateShape = require('./Assets/generateShape');
// const generateSvg = require('./Assets/generateShape');


function init () {
  //* Calls user input prompt
  userInput()
  //* Writes to .svg file after generating Svg.
    .then((response) => {
      const svgData = generateSvg(response);

      fs.writeFile("./your_logo/logo.svg", svgData, (err) => 
      err ? console.log(err) : console.log('Successfully created your Logo in the file "/your_logo"!')
      )
    });
  };

  init();








      //    // create the svg data
  //   const svgData = createSVG(data);
  //   // write the svg data to logo.svg file
  //   writeFile("logo.svg", svgData);
  // })
  // .catch((error) => console.error(error)); 
