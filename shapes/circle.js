const Shape = require("./shape");

class Circle extends Shape {
  constructor(radius = 5) {
    this.radius = radius;
  }
}

module.exports = Circle;
