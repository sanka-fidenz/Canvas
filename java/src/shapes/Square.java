package shapes;

public class Square extends Shape {
    public int length;

    public Square(int length, int borderThickness) {
        this.length = length;
        this.borderThickness = borderThickness;
    }

    public int calculateArea(boolean withBorder) {
        if (withBorder) {
            return (length + borderThickness) * (length + borderThickness);
        }
        return length * length;
    }
}
