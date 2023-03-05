let input = [
    '5',
    '4',
    '3',
    '2',
    '5',
    '2',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfValues = Number(gets());
let maxNumber = -201;

for(let i = 0; i < numberOfValues; i++) {
    let number = Number(gets());
        if(maxNumber < number) {
            maxNumber = number;
        }
}
    print(maxNumber);