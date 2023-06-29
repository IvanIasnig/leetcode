//https://leetcode.com/problems/number-of-arithmetic-triplets/

var arithmeticTriplets = function (nums, diff) {
  ris = 0;
  nums = nums.reverse();
  for (i = 0; i < nums.length; i++) {
    let x = nums[i];
    for (k = 0; k < nums.length; k++) {
      if (x - nums[k] === diff) {
        let y = nums[k];
        for (j = 0; j < nums.length; j++) {
          if (y - nums[j] === diff) {
            ris++;
          }
        }
      }
    }
  }
  return ris;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));

// ho fatto il reverse solo perchè rendeva più veloce il programma

//----------------------Soluzione leetcode
// var arithmeticTriplets = function(nums, diff) {
//     let count = 0
//     for(let num of nums){
//         if(nums.includes(num + diff) && nums.includes(num + diff*2)){
//             count++
//         }
//     }
//     return count;
// };
