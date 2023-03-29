// OWN === INSTANCE - some ppl write it like that

function Circle(radius) {

    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}

const c1 = new Circle(1);
// I can create circle first and then add the draw method,
// it will still be available -> object references

Circle.prototype.draw = function() {
    console.log('draw');
}

Object.keys(c1) // returns only instance members

for (let key in c1) console.log(key); // for...in returns all members
