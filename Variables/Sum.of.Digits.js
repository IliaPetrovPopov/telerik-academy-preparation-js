let input = [
    '1213',
];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = Number(gets());

let firstDigit = Math.floor(number / 1000);
let secondDigit = Math.floor(number / 100) % 10;
let thirdDigit = Math.floor(number / 10) % 10;
let lastDigit = number % 10;

let sum = firstDigit + secondDigit + thirdDigit + lastDigit;

print(sum);