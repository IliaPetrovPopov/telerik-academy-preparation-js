let input = [
    '2',
    '2',  
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets());
let b = Number(gets());

let sum = a + b;
let subtract = a - b;
let product = a * b;
let remainder = a % b;
let power = Math.pow(a,b);

print(sum);
print(subtract);
print(product);
print(remainder);
print(power);