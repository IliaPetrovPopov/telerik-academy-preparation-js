let input = [
"1,2,3",
"2"
];
    
let print = this.print || console.log;
let gets =
    this.gets ||
    (
    (arr, index) => () =>
        arr[index++]
    )(input, 0);

let arr = gets().split(",").map(Number);
let target = +gets();

for(let i=0; i < arr.length; i++) {
    if(i > 0 && i < arr.length-1 && arr[i] === target) {
        if(arr[i-1] !== arr[i] && arr[i+1] !== arr[i]) {
            if(arr[i-1] > arr[i+1]) {
                arr[i] = arr[i-1];
            } else {
                arr[i] = arr[i+1];
            }
        }
    }
}
print(`[${arr}]`);