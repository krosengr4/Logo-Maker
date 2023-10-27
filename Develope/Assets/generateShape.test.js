//! This file is to test the shape classs in generateShape.js and what they return. 

//* Bring in shape classes.
const {Circle, Square, Triangle} = require('./generateShape');

describe('Circle', () => {
    test('should render svg data with shape and shapeColor', () => {
        const testCircle = new Circle();
        testCircle.setColor('red');
        expect (shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />')
        
    })
})