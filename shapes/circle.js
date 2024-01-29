const Shape = require("./shape");

class Circle extends Shape {
  constructor(radius = 5) {
    super("circle");
    this.radius = radius;
  }

  calArea(borderThickness = 0) {
    return (
      (22 / 7) *
      (this.radius + borderThickness) *
      (this.radius + borderThickness)
    );
  }
}

module.exports = Circle;
