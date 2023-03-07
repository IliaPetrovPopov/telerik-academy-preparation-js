let input = [
    "3,-12,0,0,13,5,1,0,-2",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let list = gets().split(',').map(Number);
let belowElements = [];
let aboveElements = [];
let sumOfElements = 0;

for (let i=0; i<list.length; i++) {
    sumOfElements += list[i];
}
let avrg = sumOfElements / list.length;

for (let i=0; i < list.length; i++) {
    if(list[i] > avrg) {
        aboveElements.push(list[i])
    }
    else if (list[i] < avrg) {
        belowElements.push(list[i]);
    }
}
    print(`avg: ${avrg.toFixed(2)}`);
    print(`below: ${belowElements}`);
    print(`above: ${aboveElements}`)