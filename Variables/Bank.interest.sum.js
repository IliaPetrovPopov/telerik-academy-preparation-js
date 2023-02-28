let input = [
    '200.5',  
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sumBeforeDeposit = Number(gets());

let firstDeposit = (sumBeforeDeposit * 5) / 100;
let sumAfterFirstDeposit = sumBeforeDeposit + firstDeposit;

let secondDeposit = (sumAfterFirstDeposit * 5) / 100;
let sumAfterSecondDeposit = sumAfterFirstDeposit + secondDeposit;

let thirdDeposit = (sumAfterSecondDeposit * 5) / 100;
let sumAfterThirdDeposit = sumAfterSecondDeposit + thirdDeposit;

let decimalFirstSum = sumAfterFirstDeposit.toFixed(2);
let decimalSecondSum = sumAfterSecondDeposit.toFixed(2);
let decimalThirdSum = sumAfterThirdDeposit.toFixed(2);

print(decimalFirstSum);
print(decimalSecondSum);
print(decimalThirdSum);