let input = ["1,2,3,4,5", "2"];
let print = this.print || console.log;
let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let nums = gets().split(",").map(Number);
let numberOfRot = +gets();

for (let i = 0; i < numberOfRot; i++) {
    nums.push(0);
        for(let j=0; j < 1; j++) {
            let temp = nums[j];
            nums[j] = nums[nums.length - 1];
            nums[nums.length - 1] = temp;

            nums.shift()
    }
}

print(nums)