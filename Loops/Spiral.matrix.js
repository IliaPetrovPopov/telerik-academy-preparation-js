let input = ["10"];

let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let length = Number(gets());

let matrix = [];
for (let i = 0; i < length; i++) {
  matrix[i] = [];
  for (let j = 0; j < length; j++) {
    matrix[i][j] = 0;
  }
}

let row = 0,
  column = 0,
  number = 1;

for (let i = 0; i < length / 2; i++) {
  
    for (let j = row; j < length - column; j++) {
    matrix[row][j] = number++;
  }

  for (let j = row + 1; j < length-column; j++) {
    matrix[j][length - column - 1] = number++;
  }

  for (let j = length-2-row; j >= column; j--) {
    matrix[length-column-1][j] = number++;
  }
  for (let j = length - column - 2; j > row ; j--) {
    matrix[j][column] = number++;
  }

  row++;
  column++;
}

for (let i = 0; i < length; i++) {
  let row = "";
  for (let j = 0; j < length; j++) {
    row += matrix[i][j] + " ";
  }
  print(row);
}