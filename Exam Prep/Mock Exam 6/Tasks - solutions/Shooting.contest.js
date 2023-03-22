let input = [
    "3", // target
    "3", // George speed
    "1", // George latency (sending + returning - meaning to calculate it *2)
    "1", // Peter speed
    "1" ]; // Peter latency -||-
        
let print = this.print || console.log;
let gets =
    this.gets ||
    (
    (arr, index) => () =>
        arr[index++]
    )(input, 0);

let target = Number(gets());

let georgeSpeed = Number(gets());
let georgeLatency = Number(gets());

let peterSpeed = Number(gets());
let peterLatency = Number(gets());

let georgeFinalResult = (target * georgeSpeed) + 2*georgeLatency;
let peterFinalResult = (target * peterSpeed) + 2*peterLatency;

if(georgeFinalResult > peterFinalResult) {
    print("Peter");
} else if(georgeFinalResult < peterFinalResult) {
    print("George");
} else if(georgeFinalResult === peterFinalResult) {
    print("Draw");
}