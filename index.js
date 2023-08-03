const inquirer = require("inquirer");
const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes")

function writeToFile (fileName, answers) {
    let svg = "";
    svg = 
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>
    svg += "<g>"
    svg += `${answers.shape}`;

    let shapeOption;
    if (answers.shape === "Circle") {
        shapeOption = new Circle();
        svg += `<circle cx="150" cy="100" r="80" fill="${answers.BackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeOption = new Square();
        svg += `<rect x="90" y="40" width="120" height="120" fill="${answers.BackgroundColor}"/>`;  
    } else {
        shapeOption = new Triangle();
        svg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.BackgroundColor}"/>`;
    }
    
}