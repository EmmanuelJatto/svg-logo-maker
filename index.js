const inquirer = require("inquirer");
const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

const createLogo = () => {
    // TODO: Make an inquirer prompt to get text, textColor, shapeType, shapeColor data from user
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What do you want the text to say? (Up to 3 characters)'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text to be? (Use Color Keyword or Hexadecimal number)'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like?',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be? (Use Color Keyword or Hexadecimal number)'
        },
    ])
    // TODO: Create a shape object based on inquirer data
        .then((response) => {
            let logoShape;

            if (response.shape === 'Square') {
                logoShape = new Square();
                logoShape.setColor(response.shapeColor);
            } 
            else if (response.shape === 'Circle') {
                logoShape = new Circle();
                logoShape.setColor(response.shapeColor);
            }
            else {
                logoShape = new Triangle();
                logoShape.setColor(response.shapeColor);
            }
            
            // TODO: Create a svg object and set text and textColor using user Data
            const svg = new SVG();
            svg.setText(response.text, response.textColor);
        
            // TODO: Set svg shape with shape object created above
            svg.setShape(logoShape);
            // TODO: Write your svg file
            return writeFile('logo.svg', svg.render(), (err) => {
                err ? console.error(err) : console.log('SVG Created!')
            });
        })

}

createLogo();