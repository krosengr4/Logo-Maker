// Include packages needed for this application
const userInput = require('./Assets/userInput');
const createSVG = require('./Assets/generateSVG');

//* Call userInput function and writes data to and .svg file. 
 userInput()
    .then((data) => {
     // create the svg data
    const svgData = createSVG(data);
    // write the svg data to logo.svg file
    writeFile("logo.svg", svgData);
  })
  .catch((error) => console.error(error));


