let input = [
    '1',
    '2',
    '3',
    '4',
    '5',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number1 = Number(gets());
let number2 = Number(gets());
let number3 = Number(gets());
let number4 = Number(gets());
let number5 = Number(gets());

let sum = number1 + number2 + number3 + number4 + number5;

print(sum);