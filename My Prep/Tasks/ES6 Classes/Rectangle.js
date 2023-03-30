// Create a class called Rectangle with properties width
// and height. Add methods getArea and getPerimeter
// that return the area and perimeter of the rectangle.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.height * this.width
    }

    getPerimeter () {
        return 2 * (this.height + this.width);
    }
}

let rectangleRandom = new Rectangle(1, 2);

console.log(rectangleRandom.getPerimeter());