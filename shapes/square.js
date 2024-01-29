const Shape = require("./shape");

class Square extends Shape {
  constructor(length = 10) {
    this.length = length;
  }
}

module.exports = Square;
