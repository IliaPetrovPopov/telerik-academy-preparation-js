let input = [
    '4',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

  let number = Number(gets());
  let stringNumbers = '';

  for(let i = 1; i <= number; i++) {
    stringNumbers += i + " ";
  }

  for(let j = number - 1; j >= 1; j--) {
    stringNumbers += j + " ";
  }

  print(stringNumbers);