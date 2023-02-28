let input = [
    '5',
    '3',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number1 = Number(gets());
let number2 = Number(gets());

print(Math.max(number1, number2));

