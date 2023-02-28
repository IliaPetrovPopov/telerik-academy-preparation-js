let input = [
    '4',
    '5',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let width = Number(gets());
let height = Number(gets());

let area = width * height;

print(area);