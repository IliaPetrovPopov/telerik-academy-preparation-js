let input = [
    '5 4 3 10'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let pots = gets().split(" ").map(Number);

if(pots[0] > pots[1] && pots[1]> pots[2] && pots[2] > pots[3]) {
    print("Descending");
} else if (pots[0] < pots[1] && pots[1] < pots[2] && pots[2] < pots[3]) {
    print("Ascending");
} else {
    print("Mixed");
}