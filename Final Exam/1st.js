let input = [
  "E,T,O,P,A,H,F,X,C,B,M",
  "5",
  "CH3604AC",
  "CEOOO7TO",
  "CC4140CC",
  "HO1CCCBB",
  "EK9ETTBE",
  "F",
];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let allowedLetters = gets().split(",");
let totalPlates = Number(gets());

for (let i = 0; i < totalPlates; i++) {
  let plate = gets().split("");
  let isValid = false;

  for (let k = 0; k < 1; k++) {
    for (let j = 0; j < allowedLetters.length; j++) {
      if (plate[k] === allowedLetters[j]) {
        isValid = true;
        break;
      }
    }
  }

  if (isValid) {
    isValid = false;
    for (let k = 1; k < 2; k++) {
      for (let j = 0; j < allowedLetters.length; j++) {
        if (plate[k] === allowedLetters[j]) {
          isValid = true;
          break;
        }
      }
    }
  }
  if (isValid) {
    isValid = true;
    for (let j = 2; j < 6; j++) {
      if (isNaN(Number(plate[j]))) {
        isValid = false;
        break;
      }
    }
  }

  if (isValid) {
    isValid = false;
    for (k = 6; k < 7; k++) {
      for (let j = 0; j < allowedLetters.length; j++) {
        if (plate[k] === allowedLetters[j]) {
          isValid = true;
          break;
        }
      }
    }

    if (isValid) {
      isValid = false;
      for (let k = 7; k < 8; k++) {
        for (j = 0; j < allowedLetters.length; j++) {
          if (plate[k] === allowedLetters[j]) {
            isValid = true;
            break;
          }
        }
      }
    }
  }
    if (isValid) {
    let valid = plate.join("");
    print(valid);
  }
}