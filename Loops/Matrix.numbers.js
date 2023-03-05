let input = [
    '9',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberN = Number(gets());
let matrix = '';
for(let i = 1; i <= numberN; i++) {
    matrix = '';
    for(let j = 1; j <= numberN; j++) {
        if(i == j) {
            if(i === 1 && j === 1) {
                matrix += j + " ";
            }
            else  {
                 matrix += (j + (i-1)) + " "; 
            }
        }
        
        if(i < j) {
            matrix += j + (i-1) + " ";
        }

        if(i > j) {
            matrix += i + (j-1) + " ";
        }
    }
    let newMatrix = matrix;
    print(newMatrix);
}