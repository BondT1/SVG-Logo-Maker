const inquirer = require("inquirer");
const fs = require("fs");

const { Circle, Square, Triangle } = require("./lib/shapes");
const { CustomConsole } = require("@jest/console");

// writes the file based on user inputs 
function writeToFile(fileName, answers) {
  let string = "";
  string =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  string += "<g>";
  string += `${answers.shape}`;

  let shapeOption;
  if (answers.shape === "Triangle") {
    shapeOption = new Triangle();
    string += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackground}"/>`;
  } else if (answers.shape === "Square") {
    shapeOption = new Square();
    string += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackground}"/>`;
  } else {
    shapeOption = new Circle();
    string += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackground}"/>`;
  }

  string += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColour}">${answers.text}</text>`;
  string += "</g>";
  string += "</svg>";

  fs.writeFile(fileName, string, (err) => {
      err ? console.log(err) : console.log("Logo Generated");
  });
}

// inquirer questions 

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What text do you want to be displayed on the logo? (up to 3 characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "What text colour do you want? (colour keyword OR hex)",
        name: "textColour",
      },
      {
        type: "list",
        message: "What shape do want your logo to be?",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "What shape colour do you want? (colour keyword OR hex)",
        name: "shapeBackground",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Value must be no more than 3 characters");
        promptUser();
      } else {
        writeToFile("logo.svg", answers);
        console.log("Generated logo.svg");
      }
    })
}

promptUser();