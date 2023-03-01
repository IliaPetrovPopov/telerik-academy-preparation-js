let input = [
    '4',
    '3',
    '11',
    '40',
];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let days = Number(gets());
let hours = Number(gets());
let minutes = Number(gets());
let seconds = Number(gets());

let daysToSeconds = (((days * 24) * 60) * 60);
let hoursToSeconds = ((hours * 60) * 60);
let minutesToSeconds = (minutes * 60);

let sum = daysToSeconds + hoursToSeconds + minutesToSeconds + seconds;

print(sum);