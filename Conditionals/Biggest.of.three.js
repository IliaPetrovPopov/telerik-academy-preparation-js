let input = [
    '4',
    '4',
    '4',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = Number(gets());

let num2 = Number(gets());

let num3 = Number(gets());

if(num1 >= num2 && num1 >= num3)
{
    print(num1);
}
else if(num2 >= num1 && num2 >= num3)
{
    print(num2);
}
else if(num3 >= num1 && num3 >= num1)
{
    print(num3);
}