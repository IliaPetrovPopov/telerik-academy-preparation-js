let input = [
    "363",
    ];
    
    let print = this.print || console.log;
    let gets =
      this.gets ||
      (
        (arr, index) => () =>
          arr[index++]
      )(input, 0);

let number = gets();
let evenSum = 0, oddSum = 0;

for(let i=0; i < number.length; i++) {
    
    if(number[i] % 2 === 0) {
        evenSum += Number(number[i]);
    }
     else {
        oddSum += Number(number[i]);
    }
}

if(evenSum > oddSum) {
    print(`${evenSum} energy drinks`);
} else if(evenSum < oddSum) {
    print(`${oddSum} cups of coffee`);
} else if(evenSum === oddSum) {
    print(`${evenSum} of both`);
}