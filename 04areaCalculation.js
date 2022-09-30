//1. 	Your task is to create a Circle constructor that creates a circle with a radius provided by 
// an argument. The circles constructed must have two methods getArea() (Pi*r^2) and getPerimeter() 
// (2*Pi*r) which give both respective areas and perimeter (circumference).
class Circle{
    constructor (radius)
    {
        this.radius=radius;
    }
     getArea()
    {
         let pi=3.141;
         return Math.round(pi*this.radius*this.radius);
    }
    getPerimeter()
    {
        let pi=3.141;
        return Math.round(2*pi*this.radius);
    }
}
let circle=new Circle(4.5)
console.log("Area : "+circle.getArea());
console.log("Perimeter :"+circle.getPerimeter());