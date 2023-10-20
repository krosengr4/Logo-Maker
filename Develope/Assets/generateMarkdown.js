//! File to bring all the data together and generate SVG formatted data. 

// Import our shape classes. 
const { Triangle, Square, Circle } = require("./generateShape");

//* switch function to return the svg code with shape and color.
function renderShapeSvg (data) {
    let shape;

    switch(data) {
        case 'square' :
            shape = new Square();
            break; 
        
        case 'circle' :
            shape = new Circle();
            break;

        case 'triangle' :
            shape = new Triangle();
            break;
    }
    shape.setColor(data.shapeColor); //<--- data.shapeColor gets 'shapeColor' from questions array. 
    return shape.render();
}

// function to capatalize all letters in logo.
function prettyText (text) {
    return text.toUpperCase();
};

//* Function to generate the SVG file in the right format.
const generateSvg = ({shape, textColor, text}) =>
`<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg' />
${renderShapeSvg(data.render())}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${prettyText(text)}</text>`

module.exports = generateSvg;