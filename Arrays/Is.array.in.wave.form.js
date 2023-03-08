let input = ["22 34 12 523 122 4444 123"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let arr = gets().split(" ").map(Number);
let isInWaveForm = true;
if(arr[0] > arr[1]){
for (let i = 0; i < arr.length; i++) { 
  if(i % 2 === 0 && i < arr.length - 1) {
    if(arr[i] > arr[i+1]) {
      continue;
    } else {
      isInWaveForm = false;
      break;
    }
  }

  else if(i % 2 !== 0 && i < arr.length - 1) {
    if (arr[i] < arr[i+1]) {
      continue;
    } else {
      isInWaveForm = false;
      break;
    }
  }

  if(i === arr.length - 1) {
    break;
  }
}
}
  else {
  for (let i = 0; i < arr.length; i++) { 
    if(i % 2 === 0 && i < arr.length - 1) {
      if(arr[i] < arr[i+1]) {
        continue;
      } else {
        isInWaveForm = false;
        break;
      }
    }
  
    else if(i % 2 !== 0 && i < arr.length - 1) {
      if (arr[i] > arr[i+1]) {
        continue;
      } else {
        isInWaveForm = false;
        break;
      }
    }
  
    if(i === arr.length - 1) {
      break;
    }
  }
  }

  if(isInWaveForm) {
  print(`yes`);
} else {
  print(`no`);
}