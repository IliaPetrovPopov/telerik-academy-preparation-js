let input =
["10",
 "2",
 "1",
 "1",
 "2",
 "3",
 "3",
 "2",
 "2",
 "2",
 "1",
 ];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let numOfEl = +gets();
let arr = [];
let maxCounter = 1;

for (let i=0; i < numOfEl; i++) {
    let currElement = +gets();
    arr.push(currElement);
}
let currentMax = 1;

for(let i=0; i < arr.length; i++) {
    
    if(arr[i] === arr[i+1]) {
        maxCounter++;
    }
    else {
        maxCounter = 1;
    }

    if(maxCounter > currentMax) {
        currentMax = maxCounter;
    }
}

print(currentMax)