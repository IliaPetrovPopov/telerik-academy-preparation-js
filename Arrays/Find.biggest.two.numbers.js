let input = ["8 7 8 11 7 11 5 8 10"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let arr = gets().split(" ").map(Number);
let maxNum = 0, secondToMax = 0;

for(let i=0; i < arr.length; i++) {
    if(arr[i] >= maxNum && arr[i] > secondToMax) {
        secondToMax = maxNum;
        maxNum = arr[i];
    }
    else if(arr[i] < maxNum && arr[i] >= secondToMax) {
        secondToMax = arr[i];
    }
    else {
        continue;
    }
}

print(maxNum, secondToMax)