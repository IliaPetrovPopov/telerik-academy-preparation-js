let input = [
    "3",
    "1,2,2,3,2",
    "1,2,8,9,9",
    "1,2,3,4,5",];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
    
let numOfLines = +gets();

for (let i=0; i < numOfLines; i++) {
    
    let currLine = gets().split(',').map(Number);
    let isSorted = true;

    for(let j=0; j < currLine.length; j++) {
        if(j === currLine.length - 1) {
            break;
        }
        else if(currLine[j] <= currLine[j+1]) {
            continue;
        }
        else if (currLine[j] > currLine[j+1]) {
                isSorted = false;
                break;
            }
    }
    print(isSorted)
