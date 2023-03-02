let input = [
    '2',
    '-5',
    '2',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let A = Number(gets());
let B = Number(gets());
let C = Number(gets());

if((A < 0 && B > 0 && C > 0) || (A > 0 && B < 0 && C > 0) || (A > 0 && B > 0 && C < 0) || (A < 0 && B < 0 && C < 0)) {
print(`-`);
}
else if((A < 0 && B < 0 && C > 0) || (A > 0 && B < 0 && C < 0) || (A < 0 && B > 0 && C < 0) || (A > 0 && B > 0 && C > 0)) {
print(`+`);
}
else if(A == 0 || B == 0 || C == 0) {
    print(`0`);
}