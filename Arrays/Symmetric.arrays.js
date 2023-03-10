let input = ["4", "1 2 3 2 1", "2 1", "1 2 2 1", "4"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let numberOfArrays = +gets();

for (let i = 0; i < numberOfArrays; i++) {
  let arr = gets().split(" ").map(Number);
  let isSymmetric = true;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[arr.length - i - 1]) {
      continue;
    } else {
      isSymmetric = false;
      break;
    }
  }

  if (isSymmetric == true) {
    print("Yes");
  } else {
    print("No");
  }
}