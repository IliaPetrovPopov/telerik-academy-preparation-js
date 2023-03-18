let input = [
    "LLRD"
    ];
        
    let print = this.print || console.log;
    let gets =
        this.gets ||
        (
        (arr, index) => () =>
            arr[index++]
        )(input, 0);

let coords = gets().split('');
let x = 0, y = 0;

for(let i=0; i < coords.length; i++) {
    if(coords[i] === "U") {
        y++;
    } 
    else if(coords[i] === "D") {
        y--;
    }
    else if(coords[i] === "L") {
        x--;
    }
    else if(coords[i] === "R") {
        x++;
    }
}
print(`(${x}, ${y})`)

// With switch() statement - remember - inside the switch is the element
// which is tested! 

/* let input = ["LLRD"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let moves = gets().split('');
let x = 0;
let y = 0;

for(let i=0; i < moves.length; i++) {

switch(moves[i]) {
  case 'R':
  x++;
  break;
  case 'L':
  x--;
  break;
  case 'U':
  y++;
  break;
  case 'D':
  y--;
  break;
  default: 
    break;
 }
}
print(`(${x}, ${y})`); */