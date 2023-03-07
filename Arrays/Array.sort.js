let input = ["0,0,0,5,0,3,2,3"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let list = gets().split(",").map(Number);
let zeroArr = [];

for (let i = 0; i < list.length;) {
    if(list[i] === 0) {
        zeroArr.push(list[i]);
        for (let j=i; j < list.length; j++) {
            list[j] = list[j+1];
        }
        list.pop()
        i = 0
    } else {
        i++;
    }
}

let finalArr = list.concat(zeroArr);
print(finalArr)