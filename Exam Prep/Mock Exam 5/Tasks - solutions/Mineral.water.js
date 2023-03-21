let input = [
"3", 
"4", 
"8"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let small = Number(gets());
let big = Number(gets());
let capacity = Number(gets()); 

let capWithoutBig = capacity - (big*5);

if(capWithoutBig < 0) {
    let previousCapacity = 0;
    for(let i=1; i <= big;) {
        if(capacity > 0) {
            previousCapacity = capacity;
            capacity -= i*5;
        } else if(capacity < 0) {
            capacity = previousCapacity;
            break;
        }  else if(capacity === 0) {
            break;
        }
    }
    if(capacity - small === 0) {
        print(small);
    } else if(capacity - small > 0) {
        print(-1);
    } else if(capacity - small < 0) {
        print(capacity);
    } 
} 
else if(capWithoutBig === 0) {
    print(0);
}  
else if(capWithoutBig > 0) {
    if(capWithoutBig - small === 0) {
        print(small);
    } else if(capWithoutBig - small > 0) {
        print(-1);
    } else if(capWithoutBig - small < 0) {
        print(capWithoutBig);
    }
}