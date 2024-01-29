const Shape = require("./shape");

class Rectangle extends Shape {
  constructor(width = 10, height = 5) {
    super("rectangle");
    this.width = width;
    this.height = height;
  }

  calArea() {
    return this.width * this.height;
  }
}

module.exports = Rectangle;
