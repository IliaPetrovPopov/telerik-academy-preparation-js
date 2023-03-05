let input = [
    '5',
    '4',
    '5',
    '3',

];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let countOfNumbers = Number(gets());
let max = -501;
let mid = -501;
let min = -501;

for(let i = 0; i < countOfNumbers; i++) {
    let number = Number(gets());

    if(number > max) {
        if(i === 0) {
            max = number;
        }
        else {
            min = mid;
            mid = max;
            max = number;
        }
    }
    
    else if(number > mid) {
        min = mid;
        mid = number;
    }
    
    else if(number > min) {
        min = number;
    }
}
print(`${max}, ${mid} and ${min}`);