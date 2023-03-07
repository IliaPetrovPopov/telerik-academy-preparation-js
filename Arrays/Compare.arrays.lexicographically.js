let input =
["telerik",
 "teleric",
 ];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let charArr1 = gets().split('');
let charArr2 = gets().split('');

let sumOfChar1 = 0, sumOfChar2 = 0;

for(let i=0; i < charArr1.length; i++) {
    if('abcdefghijklmnopqrstuvwxyz'.includes(charArr1[i])) {
        sumOfChar1 += 'abcdefghijklmnopqrstuvwxyz'.indexOf(charArr1[i]) + 1;
    }
}

for(let i=0; i < charArr2.length; i++) {
    if('abcdefghijklmnopqrstuvwxyz'.includes(charArr2[i])) {
        sumOfChar2 += 'abcdefghijklmnopqrstuvwxyz'.indexOf(charArr2[i]) + 1;
    }
}

if(sumOfChar1 < sumOfChar2) {
    print(`first`);
} else if(sumOfChar1 > sumOfChar2) {
    print(`second`);
} else if(sumOfChar1 === sumOfChar2) {
    print(`equal`)
