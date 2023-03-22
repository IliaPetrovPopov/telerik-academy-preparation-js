let input = [
    "111", 
    "222", 
    "333", 
    "444", 
    "555" ]; 
            
    let print = this.print || console.log;
    let gets =
        this.gets ||
        (
        (arr, index) => () =>
            arr[index++]
        )(input, 0);

let alphaCiper = '';

for(let i = 0; i < 5; i++) {
    let number = gets().split('').map(Number);
    let product = number[0] * number[1] * number[2];

    if(product > 9) {
        let lastDigit = product % 10;
        alphaCiper += lastDigit;
        } else {
        alphaCiper += product;
    }
}
print(alphaCiper);