let input = [
    'Tempera#2##s^#$@2 na @*1#$ata 23 grad#%2&.'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sentence = gets().toLowerCase();
let symbol = '';
let max = 0;
let localeMax = 0;
for(let i=0; i < sentence.length; i++) {
    symbol = sentence.codePointAt(i)
    if(symbol === 46) {
        break;
    }

    if(symbol === 32 || (symbol > 47 && symbol < 58) || (symbol > 96 && symbol < 123)) {
        if(localeMax > max) {
            max = localeMax;
        }
        localeMax = 0;
    } else {
        localeMax++;
    }
}  

print(max);