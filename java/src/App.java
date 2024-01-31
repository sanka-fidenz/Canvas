import shapes.Circle;
import shapes.Rectangle;
import shapes.Shape;
import shapes.Square;

public class App {
   public static void main(String[] args) {

      Canvas canvas = new Canvas();

      Circle circle_1 = new Circle(7, 1);
      Square square_1 = new Square(1, 1);
      Rectangle rectangle_1 = new Rectangle(1, 1, 1);

      Shape[] shapes = { circle_1, square_1, rectangle_1 };
      canvas.addShape(shapes);

      System.err.println("Total area of shapes without the border: " + canvas.getTotalArea(false));
      System.err.println("Total area of shapes without the border: " + canvas.getTotalArea(true));
      System.err.println("Total area of the border of all shapes:  " + (canvas.getTotalArea(true) - canvas.getTotalArea(false)));
   }
}
