let input = ["27"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let n = Number(gets());
let row = "";

for (let i = 1; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    for (let j = row.length + 1; j <= i; j++) {
      let localPrime = true;
      for (let k = 2; k <= Math.sqrt(j); k++) {
        if (j % k === 0) {
          localPrime = false;
          break;
        }
      }
      if (localPrime) {
        row += "1";
      } else {
        row += "0";
      }
    }
    print(row);
  }
}
