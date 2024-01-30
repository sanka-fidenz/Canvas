const Shape = require("./shape");

class Square extends Shape {
  constructor(length = 10) {
    super("square");
    this.length = length;
  }

  calArea(borderThickness = 0) {
    return (
      (this.length + 2 * borderThickness) * (this.length + 2 * borderThickness)
    );
  }
}

module.exports = Square;
