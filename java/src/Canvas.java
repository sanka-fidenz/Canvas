import java.util.ArrayList;
import java.util.List;

import shapes.Shape;

public class Canvas {
    private List<Shape> shapes;

    public Canvas() {
        shapes = new ArrayList<Shape>();
    }

    public void addShape(Shape shape) {
        this.shapes.add(shape);
    }

    private int calTotalArea(boolean withBorder) {
        int sum = 0;

        for (int i = 0; i < shapes.size(); i++)
            sum += shapes.get(i).calculateArea(withBorder);

        return sum;
    }

    public int getTotalAreaWithBorder() {
        return calTotalArea(true);
    }

    public int getTotalAreaWithoutBorder() {
        return calTotalArea(false);
    }

    public int getTotalAreaOfBorders() {
        int sum = 0;

        for (int i = 0; i < shapes.size(); i++)
            sum += (shapes.get(i).calculateArea(true) - shapes.get(i).calculateArea(false));

        return sum;
    }
}
