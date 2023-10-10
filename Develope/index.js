// Include packages needed for this application
const generateLogo = require('./generateLogo');

// Array of questions to ask the user
const questionsArr =[
'Please provide 3 letters for the text of your logo:',
'Please provide a color for the text:',
'Please provide a shape for your logo:',
'Please provide a color for the shape:', 
]

// Create a prompt script
const prompt = [
    { 
        type: 'input',
        name: 'title',
        message: questionsArr[0],
      },
]

// Create function to initialize the prompt script and save as an SVG file called logo.svg.
function init() {

}

init(); 
