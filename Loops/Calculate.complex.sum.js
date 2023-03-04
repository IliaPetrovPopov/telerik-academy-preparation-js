let input = [
    '4',
    '3',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
let x = Number(gets());

let sum = 1;
let factorial = 1;
for(let i = 1; i <= n; i++) {
    factorial *= i;
    sum +=  factorial/ Math.pow(x, i);
}

sum = sum.toFixed(5);
print(sum);