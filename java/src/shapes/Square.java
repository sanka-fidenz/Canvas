package shapes;

public class Square extends Shape {
    public int length;

    public Square(int length, int borderThickness) {
        this.length = length;
        this.borderThickness = borderThickness;
    }

    public int calculateArea(boolean withBorder) {
        return (length + 2 * (withBorder ? borderThickness : 0)) * (length + 2 * (withBorder ? borderThickness : 0));
    }
}
