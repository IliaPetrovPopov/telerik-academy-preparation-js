let input = [
    '10',
    '10',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let totalHalfALiterBottles = Number(gets());
let totalLiterBottles = Number(gets());

let sumOfReturnedDeposit = (totalHalfALiterBottles * 0.1) + (totalLiterBottles * 0.25);

let sumWithDecimal = sumOfReturnedDeposit.toFixed(2);

print(sumWithDecimal);