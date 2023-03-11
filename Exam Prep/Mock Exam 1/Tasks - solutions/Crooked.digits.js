let input = ["1020340567.89"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let arrayNum = gets().split("");
let weirdSum = 0;
let weirdSumArr = [];

for (let i = 0; ; i++) {
  for (let j = 0; j < arrayNum.length; j++)
    if (isNaN(arrayNum[j])) {
      continue;
    } else {
      weirdSum += Number(arrayNum[j]);
    }

  if (weirdSum > 9) {
    let weirdSumArr = Array.from(String(weirdSum), Number);
    arrayNum = weirdSumArr;
    weirdSum = 0;
    continue;
  } else {
      print(weirdSum);
    break;
  }
}