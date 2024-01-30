namespace Canvas;

public class Rectangle : Shape
{
    public int Width { get; set; }
    public int Height { get; set; }

    public Rectangle(int width, int height)
    {
        Type = "Rectangle";
        Width = width;
        Height = height;
    }

    public override int CalArea(int borderThickness)
    {
        return (Width + 2 * borderThickness) * (Height + 2 * borderThickness);
    }

}
