let input = [
    '12:00 AM',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let time = gets();
let hours = Number(time.slice(0, time.indexOf(':')));
let minutes = Number(time.slice(time.indexOf(':') + 1, time.indexOf(" ")));
let pmOrAm = time.substring(time.indexOf(" ") + 1, time.length);

if((hours > 12 || hours < 1) || (minutes > 59 || minutes < 0) || (pmOrAm != `PM` && pmOrAm != `AM`)) {
    print(`invalid time`);
}
else if((hours >= 1 && hours <= 11) && pmOrAm === `PM`) {
    print(`beer time`);
}
else if (hours === 12 && pmOrAm === `PM`){
    print(`non-beer time`);
}
else if((hours <= 2 && hours >= 1) && pmOrAm === `AM`) {
    print(`beer time`);
}
else if((hours === 12) && pmOrAm === `AM`) {
    print(`beer time`);
}
else if((hours >= 3 && hours <= 11) && pmOrAm === `AM`) {
    print(`non-beer time`);
}