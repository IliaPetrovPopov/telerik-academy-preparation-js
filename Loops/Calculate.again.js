let input = [
    '8',
    '3',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberN = Number(gets());
let numberK = Number(gets());

let factorialOfN = 1;
let factorialOfK = 1;
let finalSum = 0;

if (numberN <= numberK || numberN < 1 || numberK < 1 || numberN > 100 || numberK > 99) {
    
  } 
    else {
    
    for (let i=2; i <= numberN; i++) {
    factorialOfN *= i;

    if (i <= numberK) {
        factorialOfK *= i;
    }
    else if (i > numberK) {
        continue;
        }
    }

    finalSum = factorialOfN / factorialOfK;
    print(finalSum.toFixed(0)); 
}