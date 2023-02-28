let input = [
    '3.5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let pi = Math.PI;
let radius = Number(gets())
let parameterofCircle = 2 * pi * radius;
let faceOfCircle = pi * radius * radius;

print(Math.round(parameterofCircle * 100) / 100);
print(Math.round(faceOfCircle * 100) / 100);