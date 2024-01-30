class Shape {
  constructor(type, borderThickness = 0) {
    this.type = type;
    this.borderThickness = borderThickness;
  }

  /**
   *
   * @param {*} borderThickness
   * @returns Area of the shape
   * This should override in each shapes
   */
  calArea(borderThickness = 0) {
    return borderThickness * borderThickness;
  }

  getAreaWithBorder() {
    return this.calArea(this.borderThickness);
  }

  getAreaWithoutBorder() {
    return this.calArea();
  }

  getAreaOfBorder() {
    return this.calArea(this.borderThickness) - this.calArea();
  }
}

module.exports = Shape;
