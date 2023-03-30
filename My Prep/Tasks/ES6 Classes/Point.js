// Create a class representing a point in two-dimensional space.
// It should have properties for the x and y coordinates,
// as well as methods to calculate the distance between
// two points and the midpoint between two points.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(otherPoint) {
        const dx = this.x - otherPoint.x;
        const dy = this.y - otherPoint.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    midPoint(otherPoint) {
        const x = (this.x + otherPoint.x) / 2;
        const y = (this.y + otherPoint.y) / 2;
        return new Point(x, y);
    }
}

let point1 = new Point(2, 3);
let point2 = new Point(4, 5);

console.log(point1.distanceTo(point2));