let input = [
    '300',
    '400',
    '4',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let intervalStart = Number(gets());
let intervalEnds = Number(gets());
let targetSum = Number(gets());

for (let i = intervalStart; i <= intervalEnds;) {
    let firstDigit = i % 10;
    let secondDigit = Math.floor(i / 10) % 10;
    let thirdDigit = Math.floor(i / 100);

    if (firstDigit + secondDigit + thirdDigit == targetSum) {
        print(i);
    }

    i++;
}