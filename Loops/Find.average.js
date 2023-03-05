let input = [
    '4',
    '1',
    '1',
    '1',
    '1',
];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let numberOfValues = Number(gets());

let sum = 0;

for(let i = 1; i <= numberOfValues; i++) {
    let nums = +gets();
    sum += nums;
}

let average = sum / numberOfValues;
average = average.toFixed(2);
print(average);