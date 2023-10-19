class Text {
    constructor() {
    this.text = 'AAA'
    this.color = 'blue'; 
    }

    setColor(color) {
        this.color = color; 
    }

    setText(text) {
        this.text = text;
    }

    textSvg () {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
};

module.export = Text;






// class Square {
//     constructor() {
//         render() {
//             return `<polygon points="150,10 280,150 20,150" fill="${this.color}" />`;
//           }
//     };
// }