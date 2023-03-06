let input = [
    '10',
    '23',
    '5555',
    '23',
    '122',
    '333',
    '2123',
    '122',
    '124',
    '222',
    '222',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let countOfNumbers = +gets();
let previousElement = Number.MAX_VALUE;
let string = '';
for(let i=0; i < countOfNumbers; i++) {
    currentNumber = +gets();

    if (currentNumber < previousElement && i == 0) {
        biggestElement = currentNumber;
        string += biggestElement;
    }
    else if (currentNumber > previousElement) {
        //if(currentNumber )
        biggestElement = currentNumber;
        string +='<'+biggestElement;
    }
    else if (currentNumber == previousElement) {
        string +='='+currentNumber;
    }
    else if (currentNumber < previousElement) {
        string +='>'+currentNumber;
    }

    previousElement = currentNumber;
}

print(string);