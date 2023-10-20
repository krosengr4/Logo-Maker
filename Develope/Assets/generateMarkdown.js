//! File to bring all the data together and generate SVG formatted data. 

// Import our shape classes. 
const { Triangle, Square, Circle } = require("./generateShape");

//todo Make a switch function that creates a new class for what shape is selected. Be sure to add in the color. 

// function to capatalize all letters in logo.
function prettyText (text) {
    return text.toUpperCase();
};

//* Function to generate the SVG file in the right format.
const generateSvg = ({shape, textColor, text}) =>
`<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg' />
(this is where shape goes)
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${prettyText(text)}</text>`

module.exports = generateSvg;