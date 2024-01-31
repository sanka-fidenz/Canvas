import java.util.ArrayList;
import java.util.List;

import shapes.Shape;

public class Canvas {
    List<Shape> shapes;

    Canvas() {
        shapes = new ArrayList<Shape>();
    }

    void addShape(Shape shape) {
        this.shapes.add(shape);
    }

    int calTotalArea(boolean withBorder) {
        int sum = 0;

        for (int i = 0; i < shapes.size(); i++)
            sum += shapes.get(i).calculateArea(withBorder);

        return sum;
    }

    int getTotalAreaWithBorder() {
        return calTotalArea(true);
    }

    int getTotalAreaWithoutBorder() {
        return calTotalArea(false);
    }

    int getTotalAreaOfBorders() {
        int sum = 0;

        for (int i = 0; i < shapes.size(); i++)
            sum += (shapes.get(i).calculateArea(true) - shapes.get(i).calculateArea(false));

        return sum;
    }
}
