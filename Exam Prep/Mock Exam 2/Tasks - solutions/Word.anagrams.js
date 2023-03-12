let input = [
    "anagram",
    "6",
    "aaagrnm",
    "aaagrnm",
    "anagra",
    "margana",
    "abc",
    "xy",
  ];
  
  let print = this.print || console.log;
  let gets =
    this.gets ||
    (
      (arr, index) => () =>
        arr[index++]
    )(input, 0);
  
  let word = gets();
  let n = Number(gets());
  
  for (let i = 0; i < n; i++) {
    let isAnagram = true;
    let compareWord = gets();
    let copy = word;
  
    if (compareWord.length === word.length) {
      for (let j = 0; j < word.length; j++) {
        if (copy.includes(compareWord[j])) {
          copy = copy.replace(compareWord[j], "");
        } else {
          isAnagram = false;
          break;
        }
      }
    } else {
      isAnagram = false;
    }
  
    if(copy.length !== 0) {
      isAnagram = false;
    }
  
    if (isAnagram) {
      print("Yes");
    } else {
      print("No");
    }
  }