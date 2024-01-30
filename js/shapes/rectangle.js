const Shape = require("./shape");

class Rectangle extends Shape {
  constructor(width = 10, height = 5) {
    super("rectangle");
    this.width = width;
    this.height = height;
  }

  calArea(borderThickness = 0) {
    return (
      (this.width + 2 * borderThickness) * (this.height + 2 * borderThickness)
    );
  }
}

module.exports = Rectangle;
