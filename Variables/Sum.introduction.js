let input = [
    '3', 
    '4',
    '11',
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number1 = +gets();
let number2 = +gets();
let number3 = +gets();

let output = number1 + number2 + number3;

console.log(output);


