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

canvas.add(circle_1);
canvas.add(rectangle_1);
canvas.add(square_1);
canvas.add(triangle_1);

console.log("totalArea", canvas.totalArea());
