let input = ["124", "214"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let ronnieN = gets().split('').map(Number);
let reanneN = gets().split('').map(Number);

let ronnieHiddenNum = '';
let reanneHiddenNum = '';

for(let i=0; i < ronnieN.length; i++) {
    let wholeN = Number(ronnieN.join(''));

    if(wholeN % ronnieN[i] === 0) {
        ronnieHiddenNum += ronnieN[i];
    }
}

for(let i=0; i < reanneN.length; i++) {
    let wholeN = Number(reanneN.join(''));

    if(wholeN % reanneN[i] === 0) {
        reanneHiddenNum += reanneN[i];
    }
}

if(Number(reanneHiddenNum) > Number(ronnieHiddenNum)) {
    print(`Reanne ${Number(reanneHiddenNum)}`);
} else if (Number(reanneHiddenNum) < Number(ronnieHiddenNum)) {
    print(`Ronnie ${Number(ronnieHiddenNum)}`)
} else if (Number(reanneHiddenNum) === Number(ronnieHiddenNum)) {
    print(`Tie ${reanneHiddenNum}`);
}