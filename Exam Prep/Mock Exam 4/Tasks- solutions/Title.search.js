/*let input = ["peshoishere", "3", "eho", "piere", "telerik"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let title = gets();
let n = Number(gets());

for(let i=0; i < n; i++) {
  let newTitle = title.split('') // splitting into array to keep track of the index value 
  let string = gets(); 
  let titleFound = true;
  let lastIndex = 0; // to keep track

  if(title.length < string.length) {
    titleFound = false;
  } else {
    for(let j=0; j < string.length; j++) {
      let index = newTitle.indexOf(string[j], lastIndex) // to find the index

      if(index > -1) {
        newTitle.splice(index, 1); // removing the digit
        lastIndex = index // setting lastIndex as the current index
      } else {
        titleFound = false;
      }
    }
  }

  if(titleFound) {
    title = newTitle.join('') // joining them into a string
    print(title)
  } else {
    print("No such title found!")
  }
} */

let input = ["peshoishere", "3", "eho", "piere", "telerik"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let title = gets();
let n = Number(gets());
let separator = "^";

for(let i=0; i < n; i++) {
  let word = gets().split('');
  let copy = title.split('');
  let titleFound = true;
  let lastIndex = 0;

  if(word.length > copy.length) {
    titleFound = false;
  } else {
    for(let j=0; j < word.length; j++) {
      let index = copy.indexOf(word[j], lastIndex)

      if(index > -1) {
        copy[index] = separator;
        lastIndex = index;
      } else {
        titleFound = false;
      }
    }
  }

  if(titleFound) {
    title = copy.join('').split(separator).join('');
    print(title);
  } else {
    print("No such title found!");
  }
}