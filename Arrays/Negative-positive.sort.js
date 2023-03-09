let input = ["7 2 -2 1 -5 4 5 -3 1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let array = gets().split(" ").map(Number);
let minusNums = [];
let plusNums = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    plusNums.push(array[i]);
  } else {
    minusNums.push(array[i]);
  }
}
let finalArr = minusNums.concat(plusNums).join(" ");
print(finalArr);