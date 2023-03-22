let input = ["1,1,1,1,1,1,1,1"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let list = gets().split(",").map(Number).sort((a, b) => a - b);
let missing = [];

for(let i=0; i < list.length; i++) {
  let isFound = false;
  for(let j=0; j < list.length; j++) {
    if(i+1 === list[j]) {
      isFound = true;
      break;
    } else {
      continue;
  }
}
  if(!isFound) {
    missing.push(i+1);
  }
}

print(missing);
