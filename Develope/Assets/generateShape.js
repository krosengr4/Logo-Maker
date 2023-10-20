//* Class functions for each shape to return respective svg data with the color. 

class Square {
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
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
};

// const testShape = new Circle
// testShape.setColor('Red');
// testShape.render();
// console.log(testShape);


module.exports = {Circle, Triangle, Square};