let input = ["12"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let number = Number(gets());

for (let i = 2; i <= number ; i++) {
    while(number % i === 0) {
        number = number / i;
        print(i);
    }
}