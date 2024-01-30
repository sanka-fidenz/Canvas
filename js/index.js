const Canvas = require("./canvas");
const Circle = require("./shapes/circle");
const Rectangle = require("./shapes/rectangle");
const Square = require("./shapes/square");
const Triangle = require("./shapes/triangle");

const canvas = new Canvas();

const circle_1 = new Circle(1);
const rectangle_1 = new Rectangle(1, 1);
const square_1 = new Square(1);
const triangle_1 = new Triangle(1, 2);

circle_1.borderThickness = 1;
rectangle_1.borderThickness = 1;
square_1.borderThickness = 1;
triangle_1.borderThickness = 1;

canvas.add(circle_1);
canvas.add(rectangle_1);
canvas.add(square_1);
canvas.add(triangle_1);

console.log({
  "total area with border": canvas.totalAreaWithBorder(),
  "total area without border": canvas.totalAreaWithoutBorder(),
  "total area of border": canvas.totalAreaOfBorder(),
});
