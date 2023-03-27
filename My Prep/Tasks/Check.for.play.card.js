let input = [
    '5'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let card = gets();

if("23456789JQKA".includes(card) || card === "10") {
    print("yes");
} else {
    print("no");
}