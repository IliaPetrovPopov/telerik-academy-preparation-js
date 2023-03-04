let input = [    '28',    '3',    'coffee',    'tea',    'pineapple',];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let targetNumber = Number(gets());
let countOfWords = Number(gets());
let avg = 0;

for (let i = 1; i <= countOfWords; i++) {
    let currWord = gets();
    let sumOfCurrWord = 0;
    
    for (let j = 0; j < currWord.length; j++) {
        let currLetter = currWord[j].toLowerCase();
        if("abcdefghijklmnopqrstuvwxy".includes(currLetter)) {
            sumOfCurrWord += "abcdefghijklmnopqrstuvwxy".indexOf(currLetter) + 1;
        }    
    }
    
    let distance = Math.abs(sumOfCurrWord - targetNumber); 
    avg += distance;
    print(`${currWord} ${distance}`);
}
avg = (avg / countOfWords).toFixed(2);
print(`${avg}`);