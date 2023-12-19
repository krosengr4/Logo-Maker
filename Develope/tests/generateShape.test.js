//! This file is to test the shape classs in generateShape.js and what they return. 

//* Bring in shape classes.
const {Circle, Square, Triangle} = require('../Assets/generateShape');

describe('Triangle', () => {
test("Testing triangle class", () => {
    let shape = new Triangle();
    shape.setColor('red');
    expect(shape.render().toEqual('<polygon points="150,10 280,150 20,150" fill="red" />'));
});
});


// test("Testing circle class", () => {
//     let shape = new Circle();
//     shape.setColor('red');
//     expect(shape.render().toEqual('<circle cx="150" cy="100" r="100" fill="red" />'));
// });

// test("Testing square class", () => {
//     let shape = new Square();
//     shape.setColor('red');
//     expect(shape.render().toEqual('<rect x="75" y="30" width="150" height="150" fill="red" />'));
// });