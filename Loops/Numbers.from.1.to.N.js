let input = [
    '6',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
  let specialNumber = Number(gets());
  let string = '';
  for(let i = 1; i <= specialNumber; i++) {
        string += i  + " ";
  }

print(string);