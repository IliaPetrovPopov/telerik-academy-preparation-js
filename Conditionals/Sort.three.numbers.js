let input = [
    '1',
    '2',
    '20',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let num1 = Number(gets());
  let num2 = Number(gets());
  let num3 = Number(gets());
  
  let max = Math.max(num1, num2, num3);
  let min = Math.min(num1, num2, num3);
  let mid = num1 + num2 + num3 - max - min;
  
  print(`${max} ${mid} ${min}`);