// Create a function to generate the file with the logo. 
const text = require('./generateLogo'); 
const fs = require('fs');


function generateText(data) {
    const text = new Text();
    text.setText(data.text);
    

    return text.textSvg();
};

function generateSVG (){
    let svgContent = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${generateText(data)}
    <svg>`

    return svgContent
};

function writeFile (filename, data) {
    try {
        fs.writeFileSync(path.join(__dirname, "..", filename), data);
        console.log("Success! Your logo is in the file in '/your_logo'");
    } catch(error) {
        console.log(error);
    }
}

module.exports = writeFile;
module.exports = generateSVG;   