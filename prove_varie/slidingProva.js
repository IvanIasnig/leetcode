var window = function (nums, size) {
  if (size < 0 || size > nums.length) return null;
  let currSum = 0;
  let maxSumSeen = -Infinity;
  for (i = 0; i < nums.length; i++) {
    currSum = currSum + nums[i];
    if (i >= size - 1) {
      maxSumSeen = Math.max(currSum, maxSumSeen);
      currSum = currSum - nums[i - (size - 1)];
    }
  }
  return maxSumSeen;
};

console.log(window([1,2,3,4,5,6,8,3,7,9] , 3))