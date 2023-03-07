let input = ["1,1,1,1,1,1,1,1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let list = gets().split(",").map(Number);
let str = '';

for (let i = 0; i < list.length; i++) {
    let counter = 0;
  for (let j = 0; j < list.length; j++) {
    if (i + 1 === list[j]) {
      break;
    } else {
        counter++;
  }
}
  if (counter == list.length) {
    if (str === '') {
        str += (i+1);
    } else {
        str += ',' + (i+1);
    }
  }
}

print(str)