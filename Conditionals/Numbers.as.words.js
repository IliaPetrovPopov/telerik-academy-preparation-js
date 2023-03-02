let input = [
    '999',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputStr = gets();
let resultStr = '';

if(inputStr.length === 3) 
{
    let hundreds = Number(inputStr[0]);
    let tens = Number(inputStr[1]);
    let ones = Number(inputStr[2]);
    switch(hundreds) {
        case 1:
            resultStr += "one hundred";
            break;
        case 2:
            resultStr += "two hundred";
            break;
        case 3:
            resultStr += "three hundred";
            break;
        case 4:
            resultStr += "four hundred";
            break;
        case 5:
            resultStr += "five hundred";
            break;
        case 6:
            resultStr += "six hundred";
            break;
        case 7:
            resultStr += "seven hundred";
            break;
        case 8:
            resultStr += "eight hundred";
            break;
        case 9:
            resultStr += "nine hundred";
            break;      
        }

    if(tens == 0 && ones == 0) {
        inputStr = '';
    }
    else {
        resultStr += ' and';
        inputStr = tens + '' + ones;
    }
}

if(inputStr.length === 2) {
    
    let storeNumber = Number(inputStr);
        if(storeNumber < 20) {
            switch(number) {
                case 1:
                resultStr += ' one';
                break;
                case 2:
                resultStr += ' two';
                break;
                case 3:
                resultStr += ' three';
                break;
                case 4:
                resultStr += ' four';
                break;
                case 5:
                resultStr += ' five';
                break;
                case 6:
                resultStr += ' six';
                break;
                case 7:
                resultStr += ' seven';
                break;
                case 8:
                resultStr += ' eight';
                break;
                case 9:
                resultStr += ' nine';
                break;
                case 10:
                resultStr += ' ten';
                break;
                case 11:
                resultStr += ' eleven';
                break;
                case 12:
                resultStr += ' twelve';
                break;
                case 13:
                resultStr += ' thirteen';
                break;
                case 14:
                resultStr += ' fourteen';
                break;
                case 15:
                resultStr += ' fifteen';
                break;
                case 16:
                resultStr += ' sixteen';
                break;
                case 17:
                resultStr += ' seventeen';
                break;
                case 18:
                resultStr += ' eighteen';
                break;
                case 19:
                resultStr += ' nineteen';
                break;

            }
        }
        else {
            let firstDigit = Number(inputStr[1]);
            let secondDigit = Number(inputStr[0]);

            switch(secondDigit) {
                case 2:
                    resultStr += ' twenty';
                    break;
                case 3:
                    resultStr += ' thirty';
                    break;
                case 4:
                    resultStr += ' fourty';
                    break;
                case 5:
                    resultStr += ' fifty';
                    break;
                case 6:
                    resultStr += ' sixty';
                    break;
                case 7:
                    resultStr += ' seventy';
                    break;
                case 8:
                    resultStr += ' eighty';
                    break;
                case 9:
                    resultStr += ' ninety';
                    break;
            }

            if(firstDigit === 0) {
                inputStr = '';
                }
                else {
                    inputStr = '' + firstDigit;
                }

        }
    
}

if(inputStr.length === 1) {
    let number = Number(inputStr);
        switch(number) {
            case 0:
                resultStr += ' zero';
                break;
            case 1:
                resultStr += ' one';
                break;
            case 2:
                resultStr += ' two';
                break;
            case 3:
                resultStr += ' three';
                break;
            case 4:
                resultStr += ' four';
                break;
            case 5:
                resultStr += ' five';
                break;
            case 6:
                resultStr += ' six';
                break;
            case 7:
                resultStr += ' seven';
                break;
            case 8:
                resultStr += ' eight';
                break;
            case 9:
                resultStr += ' nine';
                break;
            
        }
}

resultStr = resultStr.trim();

print(resultStr);