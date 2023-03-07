let input = ["2,3,1", "7,8,9"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let firstLine = gets().split(",").map(Number);
let secondLine = gets().split(",").map(Number);

let newArray = [];

for (let i = 0; i < firstLine.length; i++) {
  let firstLineSlice = firstLine.slice(i, i+1);
  let secondLineSlice = secondLine.slice(i, i+1);
  let subArr = firstLineSlice.concat(secondLineSlice);
  newArray.push(subArr);
}

print(newArray