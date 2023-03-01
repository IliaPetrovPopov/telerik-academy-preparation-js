let input = [
    '1',
    '2',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number1 = Number(gets());
let number2 = Number(gets());
let number3 = Number(gets());

let minNumber = Math.min(number1, number2, number3);
let maxNumber = Math.max(number1, number2, number3);

let sum = minNumber + maxNumber;

print(sum);