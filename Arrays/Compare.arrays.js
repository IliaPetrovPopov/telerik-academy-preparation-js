let input =
[
 "5",
 "1",
 "6",
 "3",
 "4",
 "8",
 "1",
 "6",
 "3",
 "4",
 "8", ];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let size = +gets();
let arr1 = [], arr2 = []
let areEqual = true;

for (let i=0; i < size*2 ; i++) {
    let currElement = +gets();
    if(i < size) {
        arr1.push(currElement);
    } else if (i >= size) {
        arr2.push(currElement)
    }
}

for(let i=0; i < size; i++) {
    if(arr1[i] === arr2[i]) {
        continue;
    } else {
        areEqual = false;
        break;
    }
}

if(areEqual) {
    print(`equal`);
} else {
    print(`not equal`);
