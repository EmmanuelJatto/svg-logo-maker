const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

const generateSVG = () => {
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
            message: 'What color would you like the text to be?'
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
            message: 'What color would you like the shape to be?'
        },
    ])
    // TODO: Create a shape object based on inquirer data
        .then((response) => {
            let logoShape;

            if (response.shape === 'Square') {
                logoShape = new Square();
            } 
            else if (response.shape === 'Circle') {
                logoShape = new Circle();
            }
            else if (response.shape === 'Triangle') {
                logoShape = new Triangle();
            }
        })
    // TODO: Create a svg object and set text and textColor using user Data

    // TODO: Set svg shape with shape object created above

    // TODO: Write your svg file
}

generateSVG();