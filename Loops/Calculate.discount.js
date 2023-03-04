let input = [
    '4',
    '9.99',
    '19.99',
    '29.99',
    '39.99',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfItems = Number(gets());

for(let i = 0; i < numberOfItems; i++) {
    let priceOnNRow = Number(gets());

    let discount = (priceOnNRow * 65) / 100;
    let newPrice = priceOnNRow - discount;
    newPrice = newPrice.toFixed(2);
    print(newPrice);
}