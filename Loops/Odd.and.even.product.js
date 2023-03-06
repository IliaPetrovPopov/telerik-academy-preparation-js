let input = [
    '5',
    '4',
    '3',
    '2',
    '5',
    '2',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let productOfOddNumbers = 1;
let productOfEvenNumbers = 1;

for(let i = 0; i < n; i++) {
    let number = Number(gets());

    if(i % 2 === 0) {
        productOfOddNumbers *= number;
    }
    else {
        productOfEvenNumbers *= number;
    }
}

if(productOfEvenNumbers === productOfOddNumbers) {
    print(`yes ${productOfEvenNumbers}`);
}
    else {
        print(`no ${productOfOddNumbers} ${productOfEvenNumbers}`)
    }