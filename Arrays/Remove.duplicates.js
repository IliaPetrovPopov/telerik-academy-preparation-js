let input = [
    "c,c,a,b,a,a,b,c",
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let list = gets().split(',');

for(let i=0; i < list.length; i++) {
    
    for(let j=0; j < list.length; j++) {
        if(list[i] === list[j] && i !== j){
            list.push(0);
            let temp = list[j];
            list[j] = list[list.length - 1];
            list[list.length - 1] = temp;

            list.pop()
        for(let k = j; k < list.length; k++) {
            list[k] = list[k+1];
            if(k === list.length - 1) {
                list.pop();
                break;
                }
            }
            j=0;
            continue;
        } 
    }
} 
print(list)