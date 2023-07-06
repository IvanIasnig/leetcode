/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  let maxAvr = -Infinity;
  for (i = 0; i < nums.length; i++) {
    sum = (sum + nums[i]);
    if (i >= k - 1) {
      let av;
      av = sum/ k;
      maxAvr = Math.max(av, maxAvr);
      sum = sum - nums[i - (k - 1)];
    }
  }
  return maxAvr;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
