let input = ["3 1 2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let cables = gets().split(" ").map(Number);
let numberOfTrims = 0;

while (true) {
  let shortestLength = Number.MAX_SAFE_INTEGER;

  for (let j = 0; j < cables.length; j++) {
    if (shortestLength > cables[j] && cables[j] > 0) {
      shortestLength = cables[j];
    }
  }

  for (let j = 0; j < cables.length; j++) {
    if (cables[j] > 0) {
        cables[j] -= shortestLength;
      numberOfTrims++;
    }
  }

  for(let j=0; j < cables.length; j++) {
    if(cables[j] <= 0) {
        cables.splice(j, 1);
    }
  }
  
  if (cables.length === 0) {
    print(numberOfTrims);
    break;
  }
}