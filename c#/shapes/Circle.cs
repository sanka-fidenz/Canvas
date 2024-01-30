namespace Canvas;

public class Circle : Shape
{
    public int Radius { get; set; }

    public Circle(int radius)
    {
        Type = "circle";
        Radius = radius;
    }

    public override int CalArea(int borderThickness)
    {
        return (22 / 7) * (Radius + borderThickness) * (Radius + borderThickness);
    }

}
