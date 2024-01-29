class Canvas {
  constructor() {
    this.shapes = [];
  }

  add(shape) {
    this.shapes.push(shape);
  }

  totalArea() {
    const total = this.shapes.reduce(
      (prev, shape) => prev + shape.calArea(),
      0
    );
    return total;
  }

  print() {
    this.shapes.forEach((shape) => {
      console.log(shape);
    });
  }
}

module.exports = Canvas;
