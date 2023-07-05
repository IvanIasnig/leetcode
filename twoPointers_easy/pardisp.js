/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  ris = [];
  start = 0;
  end = nums.length - 1;
  i = 0;
  k = 1;
  while (start < end) {
    if (nums[start] % 2 === 0) {
      ris[i] = nums[start];
      i = i + 2;
    } else {
      ris[k] = nums[start];
      k = k + 2;
    }

    if (nums[end] % 2 === 0) {
      ris[i] = nums[end];
      i = i + 2;
    } else {
      ris[k] = nums[end];
      k = k + 2;
    }
    start++;
    end--;
  }
  return ris;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
