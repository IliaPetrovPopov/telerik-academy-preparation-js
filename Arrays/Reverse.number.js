let input = ['123'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let resultOfInput = gets().split('');
let newArr = [];

for(let i=0; i < resultOfInput.length; i++) {
    newArr.unshift(resultOfInput[i]);
}

print(newArr.join(''))