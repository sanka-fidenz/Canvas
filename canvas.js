class Canvas {
  constructor() {
    this.shapes = [];
  }

  add(shape) {
    this.shapes.push(shape);
  }

  print() {
    this.shapes.forEach((shape) => {
      console.log(shape);
    });
  }
}

module.exports = Canvas;
