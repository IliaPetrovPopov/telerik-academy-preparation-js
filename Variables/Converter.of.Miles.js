let input = [
    '44', 
];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let m = Number(gets());
let milesToKm = m * 1.6;
let galonToLitre = 4.54;

let oneLiter = milesToKm / galonToLitre;

let result = Math.floor(100 / oneLiter);

print(`${result} litres per 100 km`);
