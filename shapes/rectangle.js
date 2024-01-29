const Shape = require("./shape");

class Rectangle extends Shape {
  constructor(width = 10, height = 5) {
    this.width = width;
    this.height = height;
  }
}

module.exports = Rectangle;
