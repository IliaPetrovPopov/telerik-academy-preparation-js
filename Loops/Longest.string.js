let input = [
    'pizza',
    'macaroni',
    'kiufte',
    'maraconi',
    'END',
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let foodWithLongestLength = '';

for(let i = -1; ; i++) {
    let currentFood = gets();
    let letOfCurrentFood = Number(currentFood.length); 
    let letOfFoodWithLongestLength = Number(foodWithLongestLength.length);
    if(currentFood === 'END') {
        break;
    }

    if(letOfCurrentFood >= letOfFoodWithLongestLength) {
        foodWithLongestLength = currentFood;
    }
}
print(foodWithLongestLength);