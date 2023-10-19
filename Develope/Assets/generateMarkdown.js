const { Triangle, Square, Circle } = require("./generateShape");

//todo Make a switch function that creates a new class for what shape is selected. Be sure to add in the color. 

function prettyText (text) {
    return text.toUpperCase();
};

const generateSvg = ({shape, textColor, text}) =>
`<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg' />
(this is where shape goes)
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${prettyText(text)}</text>`

module.exports = generateSvg;











// function renderShape (shape) {
    //     let shapeSvg; 
    
    //     switch(shape) {
    //         case 'square':
    //         shapeSvg = '<rect x="75" y="30" width="150" height="150" />'
    //         break;
    
    //         case 'circle':
    //             shapeSvg = '<circle cx="150" cy="100" r="80 />'
    //             break;
    
    //         case 'triangle':
    //             shapeSvg = '<polygon points="150,10 280,150 20,150" />'
    //             break;         
    //     }
    //     return shapeSvg;
    // };

// class Text {
//     constructor() {
//     this.text = 'AAA'
//     this.color = 'blue'; 
//     }

//     setColor(color) {
//         this.color = color; 
//     }

//     setText(text) {
//         this.text = text;
//     }

//     textSvg () {
//         return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
//     }
// };

// module.exports = {Text, };

// const text1 = new Text('ass');
// console.log(text1);







// class Square {
//     constructor() {
//         render() {
//             return `<polygon points="150,10 280,150 20,150" fill="${this.color}" />`;
//           }
//     };
// }