let input = [
    '5',
    '4 3 2 5 2',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfVariables = Number(gets());
let rowOfNumbers = gets();
let productEven = 1;
let productOdd = 1;
let split = rowOfNumbers.split(' ');

for (let i=0; i < numberOfVariables; i += 2) {
    productOdd *= Number(split[i]);
}

for (let i=1; i<numberOfVariables; i += 2) {
    productEven *= Number(split[i]);
}


if (productEven == productOdd) {
    let finalProduct = productEven
    print(`yes ${finalProduct}`);
} else {
    print(`no ${productOdd} ${productEven}`);
}