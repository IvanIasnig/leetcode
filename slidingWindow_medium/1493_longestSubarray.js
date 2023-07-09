/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  let end = 0;
  let zero = 0;
  let currSum = 0;
  let maxSum = 0;

    if(!nums.includes(0)) {
        return nums.length - 1;
    }

  while (end < nums.length) {
    currSum = currSum + nums[end];

    if (nums[end] === 0) {
      zero++;
    }

    if (zero === 2) {
      zero--;
      while (nums[start] !== 0) {
        start++;
        currSum--;
      }
      start++;
    }
    maxSum = Math.max(maxSum, currSum);
    end++;
  }
  return maxSum;
};

console.log(longestSubarray([0, 1, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 0, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1, 1, 1,]));
console.log(longestSubarray([1, 1, 1, 0, 1, 1,]));