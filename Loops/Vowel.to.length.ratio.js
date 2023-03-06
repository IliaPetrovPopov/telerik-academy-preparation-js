let input = [
    '3',
    'macaroni',
    'kiufte',
    'banica',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
  
  let foods = Number(gets());
  
  let leastVowelsWord = '';
  let numOfVowels = 0;
  let letterOfWordWithMoreVowels = 0;
  let bestVowelsToLetterRatio = 100;
  
  for (let i = 0; i < foods; i++) {
    let currentWord = gets();
    let currentWordLength = currentWord.length;
    let currentNumberOfVowelsCounter = 0;
    let currentWordRatio = 0;
  
    for (let j = 0; j < currentWordLength; j++) {
    
        if(currentWord.charAt(j) === 'a' || currentWord.charAt(j) === 'o' || currentWord.charAt(j) === 'u' || 
    currentWord.charAt(j) === 'e' || currentWord.charAt(j) === 'i') {
        currentNumberOfVowelsCounter++;
    }
    
}
    currentWordRatio = currentNumberOfVowelsCounter / currentWordLength;
  
    if (currentWordRatio < bestVowelsToLetterRatio) {
      bestVowelsToLetterRatio = currentWordRatio;
      leastVowelsWord = currentWord;
      numOfVowels = currentNumberOfVowelsCounter;
      letterOfWordWithMoreVowels = currentWordLength;
    } 
    
    else if (currentWordRatio == bestVowelsToLetterRatio && currentNumberOfVowelsCounter > numOfVowels) {
      bestVowelsToLetterRatio = currentWordRatio;
      leastVowelsWord = currentWord;
      numOfVowels = currentNumberOfVowelsCounter;
      letterOfWordWithMoreVowels = currentWordLength;
    }
  }
  
  print(`${leastVowelsWord} ${numOfVowels}/${letterOfWordWithMoreVowels}`);