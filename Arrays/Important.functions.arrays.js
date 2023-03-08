let names = ['John', 'Peter'];

names.push('Jane');
// John, Peter, Jane // adding to the end of the arr

let lastName = names.pop();
console.log(lastName) // removes and gets the last element of the arr

names.shift()// removing first index in the arr
names.filter() // to filter the array in some way, can be for example (names.length > 8)
names.splice('John', 1) // (starting from, how much items)
names.unshift(lastName) // Jane, John, Peter 
// Adds element to the front of the array

let string = 'Hello World'
let splittedString = string.split(''); // splitting elements
// default element is ','

let letters = ['H', 'e', 'l', 'l', 'o'];
let word = String(letters); // will do string with the words above
// not very useful in arrays

let wird = letters.join() // 'h,e,l,l,o' - default delimeter is ','
// i can set different derimeter, if needed

let stringy = ['2, 3, 5, 7'];
let primeStringy = gets(); // '2, 3, 5, 7'
let primeStringyArray = primeStringy.split(',');
let primes = primeStringyArray.map(Number); // map() returns new array with
// all it's element parsed to numbers // 2, 3, 5, 7

// we can do the process up like this 
// let primeStringy = gets().split(',').map(Number