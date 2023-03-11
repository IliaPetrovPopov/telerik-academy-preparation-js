let input = ["275", "693", "110", "275", "742", "462"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let sumOfBalancedNums = 0;

for(let i=0; ; i++){
  let currStr = gets();
  let firstNum = Number(currStr[0]), secondNum = Number(currStr[1]), thirdNum = Number(currStr[2])
  
  if (secondNum == firstNum + thirdNum) {
    sumOfBalancedNums += Number(currStr);
    continue;
  } else {
    break;
  }
}
print(sumOfBalancedNums);