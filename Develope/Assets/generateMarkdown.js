//! File to bring all the data together and generate SVG formatted data. 

// Import shape classes. 
const { Triangle, Square, Circle } = require("./generateShape");

//* switch function to return the svg code with shape and color.
function renderShapeSvg (data) {
    let shape = null;
    ////console.log(data.shape, '10');

    switch(data.shape) { //<--- data.shape gets 'shape' from 'questions' array.
        case 'Square' :
            shape = new Square();
            break; 
            
            case 'Circle' :
                shape = new Circle();
            break;
            
            case 'Triangle' :
                shape = new Triangle();
                break;
            }
            //// console.log(shape, '24');
            shape.setColor(data.shapeColor); //<--- data.shapeColor gets 'shapeColor' from 'questions' array. 
            //// console.log(shape.render());
            return shape.render();
        };
        
        // function to capatalize all letters in logo.
        function prettyText (data) {
            //// console.log(data.text, '32');

            let text = data.text;
            return text.toUpperCase();
        };
        
        // const generateSvg = ({data, textColor, text}) =>
        // `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg' />
        // ${renderShapeSvg(data)}
        // <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${prettyText(data)}</text>`
        
    
        //* Function to generate the SVG file in the right format.
        function generateSvg(data, text, textColor) {
            //// console.log(data.shapeColor, '44');
            let svgData = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
            ${renderShapeSvg(data)}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${prettyText(data)}</text>
            </svg>`;
            //// console.log(data.textColor);
            return svgData;
        };
        
        module.exports = generateSvg;