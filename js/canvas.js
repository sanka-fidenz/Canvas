class Canvas {
  constructor() {
    this.shapes = [];
  }

  add(shape) {
    this.shapes.push(shape);
  }

  totalAreaWithBorder() {
    const total = this.shapes.reduce(
      (prev, shape) => prev + shape.getAreaWithBorder(),
      0
    );
    return total;
  }

  totalAreaWithoutBorder() {
    const total = this.shapes.reduce(
      (prev, shape) => prev + shape.getAreaWithoutBorder(),
      0
    );
    return total;
  }

  totalAreaOfBorder() {
    const total = this.shapes.reduce(
      (prev, shape) => prev + shape.getAreaOfBorder(),
      0
    );
    return total;
  }
}

module.exports = Canvas;
