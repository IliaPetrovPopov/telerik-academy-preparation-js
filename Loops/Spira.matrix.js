const n = 3; // Size of matrix
let matrix = [];
for (let i = 0; i < n; i++) {
  matrix[i] = [];
  for (let j = 0; j < n; j++) {
    matrix[i][j] = 0; // Initialize all elements to 0
  }
}

let row = 0,
  col = 0,
  num = 1;

// Loop to print spiral matrix
for (let i = 0; i < n / 2; i++) {
  // Print top row
  for (let j = col; j < n - col; j++) {
    matrix[row][j] = num++;
  }

  // Print right column
  for (let j = row + 1; j < n - row; j++) {
    matrix[j][n - col - 1] = num++;
  }

  // Print bottom row
  for (let j = n - col - 2; j >= col; j--) {
    matrix[n - row - 1][j] = num++;
  }

  // Print left column
  for (let j = n - row - 2; j > row; j--) {
    matrix[j][col] = num++;
  }

  row++;
  col++;
}

// Print the matrix
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row += matrix[i][j] + " ";
  }
  console.log(row);
}
