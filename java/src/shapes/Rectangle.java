package shapes;

public class Rectangle extends Shape {
    public int width;
    public int height;

    public Rectangle(int width, int height, int borderThickness) {
        this.width = width;
        this.height = height;
        this.borderThickness = borderThickness;
    }

    public int calculateArea(boolean withBorder) {
        return (width + 2 * (withBorder ? borderThickness : 0)) * (height + 2 * (withBorder ? borderThickness : 0));
    }
}
