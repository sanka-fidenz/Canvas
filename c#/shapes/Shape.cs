namespace Canvas;

public class Shape
{
    public string? Type { get; set; }
    public int BorderThickness { get; set; }

    public virtual int CalArea(int borderThickness)
    {
        return borderThickness * borderThickness;
    }

    public int GetAreaWithBorder()
    {
        return CalArea(BorderThickness);
    }

    public int GetAreaWithoutBorder()
    {
        return CalArea(0);
    }

    public int GetAreaOfBorder()
    {
        return GetAreaWithBorder() - GetAreaWithoutBorder();
    }
}
