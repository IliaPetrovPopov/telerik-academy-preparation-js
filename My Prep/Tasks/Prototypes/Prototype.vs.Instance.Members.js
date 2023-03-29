function Circle(radius) {
    // Instance members

    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}

// Prototype members
// Can access the prototype also, because JS is dynamic language

Circle.prototype.draw = function() {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

// Even though there is toString() method in the prototype,
// the method I defined below will be used because it is
// more accessible
Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

// We can access instance members in the prototype METHOD 
// and the opposite is also valid 