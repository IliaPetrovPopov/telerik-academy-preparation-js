let input = [
    'morty',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let typeOfInput = gets();
let string = '';

if (isNaN(typeOfInput)) {
        let start = 0;
        let end = typeOfInput.length;
            while(start <= end) {
                string += typeOfInput.charAt(end);
                end--;
            }

            print(string);
   
}
else {
    typeOfInput = Number(typeOfInput);
    typeOfInput += 1;
    print(typeOfInput);
}