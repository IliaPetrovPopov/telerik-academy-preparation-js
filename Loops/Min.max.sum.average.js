let input = [
    '3',
    '2',
    '5',
    '1',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfValues = Number(gets());
let minNumber = 10000;
let maxNumber = -10000;
let sum = 0;
let average = 0;

for(let i = 0; i < numberOfValues; i++) {
    let number = Number(gets());
    if(number > maxNumber) {
        maxNumber = number;
    }

    if(number < minNumber) {
        minNumber = number;
    }

    sum += number;
}

average = sum / numberOfValues;
average = average.toFixed(2);
sum = sum.toFixed(2);
minNumber = minNumber.toFixed(2);
maxNumber = maxNumber.toFixed(2);

print(`min=${minNumber}`);
print(`max=${maxNumber}`);
print(`sum=${sum}`);
print(`avg=${average}`);