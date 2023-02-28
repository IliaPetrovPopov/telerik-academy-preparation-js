let input = [
    '10.5',  
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let bill = Number(gets());
let tip = bill / 10;

let billWithTip = bill+tip;

let billWithTipInt = parseInt(billWithTip);

print(billWithTipInt);