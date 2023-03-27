let input = [
    '185'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets().split('').map(Number);

let max = Math.max((n[0] * n[1] * n[2]), (n[0] * n[1] + n[2]), (n[0]+ n[1] * n[2]), (n[0] + n[1] + n[2]));
print(max);