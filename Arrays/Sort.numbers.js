let input = ['3, 1, 1, 1, 2, 2, 2, 3, 3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arrayOfInput = gets().split(',');
let newArray = arrayOfInput.map(Number);
let finalArray = [];

for (let i=0; i < newArray.length; i++) {
    let currentElement = newArray[i];
    for (let j = i+1; j < newArray.length; j++) {
        if (newArray[i] < newArray[j]) {
            let temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
    }
    finalArray.push(newArray[i]);
}

print(finalArray