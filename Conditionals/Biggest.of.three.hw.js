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
