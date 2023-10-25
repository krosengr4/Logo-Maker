//! This file creates shape classes and exports them.

//* Class functions for each shape to return respective svg data with color. 
class Square {
    constructor () {
        this.color = '';
    }
    // sets the color
    setColor (color) {
        this.color = color;
    }
    // Gives back svg line
    render() {
        return `<rect x="75" y="30" width="150" height="150" fill="${this.color}" />`;
    }
};
class Circle {
    constructor () {
        this.color = '';
    }
    setColor (color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
};
class Triangle {
    constructor () {
        this.color = '';
    }
    setColor (color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150,10 280,150 20,150" fill="${this.color}" />`;
    }
};

// const testShape = new Circle
// testShape.setColor('Red');
// testShape.render();
// console.log(testShape.render());

//* Export our three shape classes.
module.exports = {
    Circle, 
    Triangle, 
    Square,
};