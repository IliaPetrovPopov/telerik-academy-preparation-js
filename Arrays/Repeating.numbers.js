let input = ["7", "1", "2", "3", "1", "2", "6", "7"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let nums = +gets();
let count = {};
let maxCount = 0;
let maxNum = 0;

for (let i = 0; i < nums; i++) {
  let num = +gets();
  if (count[num] === undefined) {
    count[num] = 0;
  }
  count[num]++;
  if (count[num] > maxCount || (count[num] === maxCount && num < maxNum)) {
    maxCount = count[num];
    maxNum = num;
  }
}

print(maxNum);