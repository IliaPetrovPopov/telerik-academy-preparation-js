let input = [
    'f',
    '3',
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let L = gets();
let R = Number(gets());

  if((L === 'a' || L === 'c' || L === 'e' || L === 'g') && R % 2 == 1)
{
   print(`dark`)
}
  else if((L === 'a' || L === 'c' || L === 'e' || L === 'g') && R % 2 == 0)
{
  print(`light`)
}
  else if((L === 'b' || L === 'd' || L === 'f' || L === 'h') && R % 2 == 0)
{
  print(`dark`)
}
  else if((L === 'b' || L === 'd' || L === 'f' || L === 'h') && R % 2 == 1)
{
  print(`light`)
}
