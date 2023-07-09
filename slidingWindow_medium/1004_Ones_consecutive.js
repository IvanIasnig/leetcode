var longestOnes = function(nums, k) {
    
let currSum = 0;
let maxOutput = 0;
let start = 0;
let end = 0;
let f = 0;

while (end < nums.length) {
  currSum++;
  if (nums[end] == 0) {
    f++;
  }

  end++;

  if (f > k) {
    currSum--;
    f--;
    while (start < end && nums[start] != 0) {
      start++;
      currSum--;
    }
    start++;
  }
  maxOutput = Math.max(currSum, maxOutput);
}
return maxOutput;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0] , 2))