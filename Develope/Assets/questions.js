const shapes = ['Square', 'Circle', 'Triangle'];

// Questions to ask the user. 
const questions= [
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

  module.exports = questions;