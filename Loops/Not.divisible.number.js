let input = [
    '4',
    '1',
    '1',
    '1',
    '1',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let number = Number(gets());
let string = '';

for(let i = 1; i <= number; i++) {
    if(i % 3 != 0 && i % 7 != 0) {
        string += i + " ";
    }
    else {
        continue;
    }
}

print(string);