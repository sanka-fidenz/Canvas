using Canvas;

Canva canvas = new Canva();

Circle circle_1 = new Circle(1);
Square square_1 = new Square(1);
Rectangle rectangle_1 = new Rectangle(1, 1);

circle_1.BorderThickness = 1;
square_1.BorderThickness = 1;
rectangle_1.BorderThickness = 1;

canvas.AddShape(circle_1);
canvas.AddShape(square_1);
canvas.AddShape(rectangle_1);

Console.WriteLine($"Total area with border:\t\t{canvas.TotalAreaWithBorder()}");
Console.WriteLine($"Total area without border:\t{canvas.TotalAreaWithoutBorder()}");
Console.WriteLine($"Total area of border:\t\t{canvas.TotalAreaOfBorder()}");
