const Shape = require("./shape");

class Square extends Shape {
  constructor(length = 10) {
    super("square");
    this.length = length;
  }

  calArea() {
    return this.length * this.length;
  }
}

module.exports = Square;
