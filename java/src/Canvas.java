import java.util.ArrayList;
import java.util.List;

import shapes.Shape;

public class Canvas {
    List<Shape> shapes;

    Canvas() {
        shapes = new ArrayList<Shape>();
    }

    void addShape(Shape[] shapes) {
        for (Shape shape : shapes) {
            this.shapes.add(shape);
        }
    }

    int getTotalArea(boolean withBorder) {
        int sum = 0;

        for (int i = 0; i < shapes.size(); i++)
            sum += shapes.get(i).calculateArea(withBorder);

        return sum;
    }
}
