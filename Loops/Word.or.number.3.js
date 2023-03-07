let input = [
    '9',
    'try',
    'google',
    'it',
    '2',
    'plus',
    '2',
    '=',
    '52',
    '-10',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let getTheNumber = Number(gets());
let finalString = '';
let finalSum = 0;
let previousIsNumber = false;

for (let i=1; i <= getTheNumber; i++) {
    let currVar = gets();
    
    if (isNaN(Number(currVar))) {
       
        if(previousIsNumber) {
        
            if(finalString === '') {
                finalString = currVar;
        } else {
            finalString += '-' + currVar;
        }
        print(finalSum); 
        finalSum = 0;
        previousIsNumber = false;
        
    } else {
        if(finalString === '') {
            finalString = currVar;
        }
            else {finalString += '-' + currVar;
        previousIsNumber = false;
        } }
     } else {
        if (previousIsNumber) {
            finalSum += Number(currVar);
            previousIsNumber = true;
        } else {
            print(finalString);
            finalString = '';
            finalSum = Number(currVar);
            previousIsNumber = true;
        }
     }
  }

  if(previousIsNumber) {
    print(finalSum);
  } else {
    print(finalString);
  }