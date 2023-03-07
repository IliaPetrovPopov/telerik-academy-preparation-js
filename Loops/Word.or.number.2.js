let input = [
    '3',
    'try',
    'go',
    'es',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfValues = gets();
let finalString = '';
let finalSum = 0;
let countOfWords = 0;

for (let i=1; i <= numberOfValues; i++) {
    let currentVariable = gets();
    
    if (isNaN(currentVariable)) {
        
        if (countOfWords == 0) {
            finalString += currentVariable+'-';
            countOfWords++;
        }
        
        else if(countOfWords == 1) {
            finalString += currentVariable;
            countOfWords++;
        }
        
        else {
            finalString = finalString.concat('-', currentVariable);
            countOfWords++;
        }
    }
    
    else {
        currentVariable = Number(currentVariable);
        finalSum += currentVariable;
    }
}  

if (countOfWords == 0) {
    print(`no words`);
}
else {
    print(finalString); 
}

if (finalSum == 0) {
    print(0);
}
else {
    print(finalSum);
}