let input = [
    '2',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let A = Number(gets());

if(A >= 1 && A <= 3)  {
    A *= 10;
    print(`${A}`);
}
else if(A >= 4 && A <= 6)  {
    print(`${A * 100}`);
}
else if(A >= 7 && A <= 9)  {
    A *= 100;
    print(`${A * 100}`);
}
else if(A <= 0 || A > 9) {
    print(`invalid score`);
}