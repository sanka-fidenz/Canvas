const Shape = require("./shape");

class Circle extends Shape {
  constructor(radius = 5) {
    super("circle");
    this.radius = radius;
  }

  calArea() {
    return (22 / 7) * this.radius * this.radius;
  }
}

module.exports = Circle;
