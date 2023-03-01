let input = [
    '-1',
    '3',
    '0',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let firstCoefficient = Number(gets());
let secondCoefficient = Number(gets());
let thirdCoefficient = Number(gets());

let discriminant = ((secondCoefficient * secondCoefficient) -4 * firstCoefficient * thirdCoefficient);
let squaredDiscriminant = Math.sqrt(discriminant);
let firstRoot = (-secondCoefficient + squaredDiscriminant) / (2 * firstCoefficient); 
let secondRoot = (-secondCoefficient - squaredDiscriminant) / (2 * firstCoefficient);

let secondRootWithDecimal = secondRoot.toFixed(1);
let firstRootWithDecimal = firstRoot.toFixed(1);

print(`x1=${secondRootWithDecimal}`);
print(`x2=${firstRootWithDecimal}`);
