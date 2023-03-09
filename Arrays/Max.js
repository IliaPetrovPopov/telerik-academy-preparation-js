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

let totalNums = +gets();
let maxSum = 0, currSum = 0;

for(let i=0; i < totalNums; i++) {
    let currValue = +gets();
    currSum += currValue;
    if(currSum > maxSum) {
        maxSum = currSum;
    } else if(currSum < 0){
        currSum = 0;
    }
}

print(maxSum);