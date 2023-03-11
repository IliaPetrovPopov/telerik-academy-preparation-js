let input = ["27"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let numbers = +gets();

for (let i=0; i < numbers; i++) {
    let currVar = i+1;
    let str = '';

    if(currVar < 4) {
        for(let k=1; k <= currVar; k++) {
            str += '1';
        }
        print(str)
    } else if(currVar >= 4) {
        str = '111';
        let isPrime = true;

        for(let j = 2; j <= Math.sqrt(currVar); j++) {
            if(currVar % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            for(let j = 4; j <= currVar; j++) {
                isPrime = true;
                for(let k = 2; k <= Math.sqrt(j); k++) {
                    if(j % k === 0) {
                        isPrime = false;
                        break;
                        } else {
                            continue;
                        }
                    }
                    
                    if(isPrime) {
                        str += '1';
                    } else {
                        str += '0';
                    }
                }
                print(str)
            }
        }
    }