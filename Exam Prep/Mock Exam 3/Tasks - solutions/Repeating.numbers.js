let input = [
    "1",
    "6"
  ];
  
  let print = this.print || console.log;
  let gets =
    this.gets ||
    (
      (arr, index) => () =>
        arr[index++]
    )(input, 0);
  
  let n = +gets();
  let list = [];
  
  for(let i=0; i<n; i++) {
    let currVar = Number(gets());
    list.push(currVar);
  }
  
  let sort = list.sort();
  let target = sortEl[0];
  let maxCounter = 0, previousDigit = 0, maxDigit = 0;
  let counter = 1;
  
  
    for(let i = 1; i <= sort.length; i++) {
      let current = sort[i];
  
      if(target === current) {
        counter++;
      } else {
        if(counter > maxCounter) {
          maxCounter = counter;
          maxDigit = target;
        } 
          else if(counter === maxCounter) {
            if(target < maxDigit) {
              maxCounter = counter;
              maxDigit = target;
          }
        }
  
        target = current;
        counter = 1;
      }
    }
  print(maxDigit);