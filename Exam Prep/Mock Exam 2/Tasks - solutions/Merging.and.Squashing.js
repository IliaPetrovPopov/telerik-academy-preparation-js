let input = ["4", "12", "23", "34", "45"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let n = +gets();

let first = gets().split("").map(Number);
let merge = '', squash = '';

for (let i = 0; i < n - 1; i++) {
  let second = gets().split("").map(Number);

  if (first[1] + second[0] > 9) {
    squash += first[0] + "" + ((first[1] + second[0]) % 10) + "" + second[1] + " ";
  } else {
    squash += first[0] + "" + (first[1] + second[0]) + "" + second[1] + " ";
  }
  merge += first[1] + "" + second[0] + " ";
  first = second;
}

print(merge);
print(squash); 
