let input = ["4,4,2", "1,3,4,2"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let sub = gets().split(",").map(Number);
let main = gets().split(",").map(Number);
let finalArr = [];

for (let i = 0; i < sub.length; i++) {
  for (let j = main.indexOf(sub[i]); j < main.length; j++) {
        if(sub[i] < main[j]) {
          finalArr.push(main[j]);
          break;
        } 
        if(j === main.length - 1) {
          finalArr.push(-1);
        }
      }
    }     
print(finalArr);