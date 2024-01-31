import shapes.*;

public class App {
   public static void main(String[] args) {

      Canvas canvas = new Canvas();

      Circle circle_1 = new Circle(7, 1);
      Square square_1 = new Square(1, 1);
      Rectangle rectangle_1 = new Rectangle(1, 1, 1);

      Shape[] shapes = { circle_1, square_1, rectangle_1 };

      for (Shape shape : shapes) {
         canvas.addShape(shape);
      }

      System.err.println("Total area of shapes with the border:    " + canvas.getTotalAreaWithBorder());
      System.err.println("Total area of shapes without the border: " + canvas.getTotalAreaWithoutBorder());
      System.err.println("Total area of the border of all shapes:  " + (canvas.getTotalAreaOfBorders()));
   }
}
