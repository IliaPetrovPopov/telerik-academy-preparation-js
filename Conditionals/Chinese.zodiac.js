let input = [
    '1975',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
let year = Number(gets());

let secondToLastDigit = year % 100;
let lastDigit = year % 10;
let coefficient = Math.round(secondToLastDigit / 12);

    if(year % 12 == 8)  {
        print(`Dragon`);
    }
    else if(year % 12 == 9) {
        print(`Snake`);
    }
    else if(year % 12 == 10) {
        print(`Horse`);
    }
    else if(year % 12 == 11) {
        print(`Sheep`);
    }
    else if(year % 12 == 0) {
        print(`Monkey`);
    }
    else if(year % 12 == 1) {
        print(`Rooster`);
    }
    else if(year % 12 == 2) {
        print(`Dog`);
    }
    else if(year % 12 == 3) {
        print(`Pig`);
    }
    else if(year % 12 == 4) {
        print(`Rat`);
    }
    else if(year % 12 == 5) {
        print(`Ox`);
    }
    else if(year % 12 == 6) {
        print(`Tiger`);
    }
    else if(year % 12 == 7) {
        print(`Hare`);
    }