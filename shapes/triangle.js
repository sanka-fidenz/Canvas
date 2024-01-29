const Shape = require("./shape");

class Triangle extends Shape {
  constructor(base = 10, height = 5) {
    super("triangle");
    this.base = base;
    this.height = height;
  }

  calArea() {
    return 0.5 * this.base * this.height;
  }
}

module.exports = Triangle;
