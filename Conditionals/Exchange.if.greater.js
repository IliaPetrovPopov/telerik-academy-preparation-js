let input = [
    '4',
    '2',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let A = Number(gets());
let B = Number(gets());

if(A > B)   {
    let C = 0;
    
    C = A;
    A = B;
    B = C;

    print(`${A} ${B}`);
}
else {
    print(`${A} ${B}`);
}