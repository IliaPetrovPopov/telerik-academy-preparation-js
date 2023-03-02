let input = [
    'real',
    '-2.5',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let typeOfInput = gets();
let valueOfVariable = gets();

    switch(typeOfInput) {
        case 'integer':
            let intValue = Number(valueOfVariable);
            print(`${intValue + 1}`);
        break;
        
        case 'real':
            let doubleValue = (Number(valueOfVariable) + 1).toFixed(2);
            print(`${doubleValue}`);
        break;
        
        case 'text':
            print(`${valueOfVariable}*`);
        break;
    }