let input = [
    "5",
    "telerik",
    "alpha",
    "java", 
    "Spring",
    "nodeJS"
    ];
    
    let print = this.print || console.log;
    let gets =
      this.gets ||
      (
        (arr, index) => () =>
          arr[index++]
      )(input, 0);
    
    let n = Number(gets());
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let maxSum = 0, maxString = '';
    
    for(let i=0; i < n; i++) {
      let word = gets().split('');
      let currentSum = 0;
    
      for(let j=0; j < word.length; j++) {
        currentSum += alphabet.indexOf(word[j].toLowerCase()) + 1;
      } 
    
      if(currentSum > maxSum) {
        maxSum = currentSum;
        maxString = word.join('');
      }
    }
    
    print(`${maxSum} ${maxString}`);