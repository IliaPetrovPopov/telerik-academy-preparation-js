let input = ["4", "12", "23", "34", "45"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let total = +gets();
let str = '', mergeString = "", squashString = "", sum = 0;

for (let i = 0; i < total; i++) {
    str += gets() + " ";
}

let arr = str.split(" ");
arr.pop();

for(let i=0; i < arr.length - 1; i++) {
let first = arr[i][1], second = arr[i+1][0], n1 = arr[i][0], n2 = arr[i+1][1];
sum = Number(first) + Number(second);
  if(sum > 9) {
    sum %= 10;
  }
  squashString += n1 + sum + n2 + " ";
  mergeString += first + second + " ";
}
print(mergeString);
print(squashString);