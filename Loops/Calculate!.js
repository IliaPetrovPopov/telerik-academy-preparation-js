let input = [
    '10',
    '23',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let x = Number(gets());
let factorial = 1;

let resultSum = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
    resultSum += factorial/Math.pow(x, i);
}

print(resultSum.toFixed(5));