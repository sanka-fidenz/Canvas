namespace Canvas;

public class Canva
{
    public List<Shape> Shapes { get; }

    public Canva()
    {
        Shapes = [];
    }

    public void AddShape(Shape shape)
    {
        Shapes.Add(shape);
    }

    public int TotalAreaWithBorder()
    {
        return Shapes.Sum(x => x.GetAreaWithBorder());
    }

    public int TotalAreaWithoutBorder()
    {
        return Shapes.Sum(x => x.GetAreaWithoutBorder());
    }

    public int TotalAreaOfBorder()
    {
        return Shapes.Sum(x => x.GetAreaOfBorder());
    }
}
