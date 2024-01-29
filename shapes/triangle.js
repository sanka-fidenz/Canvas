const Shape = require("./shape");

class Triangle extends Shape {
  constructor(base = 10, height = 5) {
    super("triangle");
    this.base = base;
    this.height = height;
  }

  calArea(borderThickness = 0) {
    /**
     * TODO: Need to check the correctness of this equation
     */
    return (
      0.5 *
      (this.base + 2 * borderThickness) *
      (this.height + 2 * borderThickness)
    );
  }
}

module.exports = Triangle;
