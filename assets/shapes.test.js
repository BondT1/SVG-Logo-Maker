const { describe } = require("yargs");
const { Circle, Square, Triangle } = require("./shapes.js");

// testing for triangle, circle and square

describe("Circle test", () => {
  test("test for circle with green background", () => {
    const shape = new Circle();
    shape.setColour("green")
    expect(shape.render()).toEqual(
       '<circle cx="150" cy="115" r="80" fill="green" />'
    );
  });
});

describe("Square test", () => {
  test("test for a square with #e75f4b background", () => {
    const shape = new Square();
    shape.setColour("#e75f4b");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#e75f4b" />'
    );
  });
});

describe("Triangle test", () => {
  test("test for a traingle with blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  })
})