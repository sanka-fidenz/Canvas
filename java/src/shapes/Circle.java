package shapes;

public class Circle extends Shape {

    public int radius;

    public Circle(int radius, int borderThickness) {
        this.radius = radius;
        this.borderThickness = borderThickness;
    }

    public int calculateArea(boolean withBorder) {
        if (withBorder) {
            return (22 / 7) * (radius + borderThickness) * (radius + borderThickness);
        }
        return (22 / 7) * radius * radius;
    }
}
