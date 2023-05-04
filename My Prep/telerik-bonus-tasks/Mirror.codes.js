let input = [
    '234 145'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let u = gets();
let f = u[2] + '' + u[1] + '' + u[0];
let s = u[6] + '' + u[5] + '' + u[4];
print(Math.max(f, s));
