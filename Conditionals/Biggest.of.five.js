let input = [
    '3',
    '5',
    '10',
    '14',
    '15',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = Number(gets());
let num2 = Number(gets());
let num3 = Number(gets());
let num4 = Number(gets());
let num5 = Number(gets());

let maxNum = 0;
let secondMaxNum = 0;

if(num1 > num2)
{
    maxNum = num1;
    }
else
{
    maxNum = num2;
    }

if(num3 > maxNum)
{
    maxNum = num3;
}

if(num4 > num5)
{
    secondMaxNum = num4
    }
else {
    secondMaxNum = num5;
}

if(maxNum > secondMaxNum) {
    print(maxNum);
}
else {
    print(secondMaxNum);
}