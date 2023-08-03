const inquirer = require("inquirer");
const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes")

function writeToFile(fileName, answers) {
    let string = "";
    string =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    string += "<g>";
    string += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
      string += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackground}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
      string += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackground}"/>`;
    } else {
      shapeChoice = new Circle();
      string += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackground}"/>`;
    }
  
    string += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    string += "</g>";
    string += "</svg>";

    fs.writeFile(fileName, string, (err) => {
        err ? console.log(err) : console.log("Logo Generated");
    });
}