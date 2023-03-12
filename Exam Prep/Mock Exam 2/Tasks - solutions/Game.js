let input = ["185"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let inputNum = gets();
let n1 = +inputNum[0], n2 = +inputNum[1], n3 = +inputNum[2];
let maxN = n1 * n2 * n3;
for(let i =0; ; i++) {
if (n1 * n2 + n3 > maxN) {
  maxN = n1 * n2 + n3;
} else if (n1 + n2 * n3 > maxN) {
  maxN = n1 + n2 * n3;
} else if (n1 + n2 + n3 > maxN) {
  maxN = n1 + n2 + n3;
} else {
  break;
}
}
print(maxN);