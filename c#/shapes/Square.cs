namespace Canvas;

public class Square : Shape
{
    public int Length { get; set; }

    public Square(int length)
    {
        Type = "square";
        Length = length;
    }

    public override int CalArea(int borderThickness)
    {
        return (Length + 2 * borderThickness) * (Length + 2 * borderThickness);
    }

}
