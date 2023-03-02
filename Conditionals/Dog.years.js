let input = [
    '1',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
let humanYears = Number(gets());

let firstYear = 10;
let secondYear = 10;
let dogYears = 0;

if(humanYears < 1 || humanYears > 15)
{
    print(`Wrong input! `);
}

if(humanYears > 2)
{
    dogYears = (firstYear + secondYear) + 4*(humanYears - 2);
}
else if(humanYears == 2)
{
    dogYears = firstYear + secondYear;
}
else if(humanYears = 1)
{
    dogYears = firstYear;
}

print(dogYears);