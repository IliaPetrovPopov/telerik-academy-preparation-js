/*let input = [
    "He is no spring chicken anymore",];
        
        let print = this.print || console.log;
        let gets =
          this.gets ||
          (
            (arr, index) => () =>
              arr[index++]
          )(input, 0);
    
    let sentence = gets().split(" ");
    let finalStr = '', word = '';
for(let i=0; i < sentence.length; i++) {
    word = sentence[i];
    let modifWord = ''
    if("aeiou".includes(word.charAt(0).toLowerCase())) {
        let firstCh = word.charAt(0);
        let firstChMissing = word.replace(word.charAt(0), '');
        modifWord += firstChMissing + firstCh + "che";

        if(word.length % 2 === 0) {
            modifWord += "e";
        }
    } else {
        modifWord += word + "che"
        
        if(word.length % 2 === 0) {
            modifWord += "e";
        }
       
    }
    if(i === 0) {
            finalStr += modifWord;
        } else {
            finalStr += " " + modifWord;
    }
}
print(finalStr);*/

let input = ["Ae is no spring chicken anymore"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let sentence = gets().split(" ");
let vowels = "aeiou".split("");
let finalSentence = "";

for (let i = 0; i < sentence.length; i++) {
  let word = sentence[i].split("");
  let firstLVowel = false;
  for (let j = 0; j < vowels.length; j++) {
    if (word[0].toLowerCase() === vowels[j]) {
      firstLVowel = true;
      break;
    }
  }

  if (firstLVowel) {
    let firstLetter = word.shift();
    word.push(firstLetter);
    word = word.join("");
    word += "che";
  } else {
    word = word.join("");
    word += "che";
  }

  if (sentence[i].length % 2 === 0) {
    word += "e";
  }

  finalSentence += word + " ";
}

print(finalSentence);