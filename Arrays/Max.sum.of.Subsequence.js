let input = [
    '10',
    '2',
    '3',
    '-6',
    '-1',
    '2',
    '-1',
    '6',
    '4',
    '-8',
    '8',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numOfEl = +gets();
let maxSum = Number.MIN_VALUE, currentSum = 0;

for(let i=0; i < numOfEl; i++) {
let num = +gets();
currentSum += num;

    if(currentSum > maxSum) {
        maxSum = currentSum;
    } else if (currentSum < 0) {
        currentSum = 0;
    }
}

print(maxSum)