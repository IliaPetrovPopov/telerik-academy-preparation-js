let input = ["0 15 30"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let list = gets().split(" ").map(Number)

for (let i=0; i < list.length; i++) {
    list[i] = Math.floor((list[i]*1.8) + 32);
    print(list[i]);
