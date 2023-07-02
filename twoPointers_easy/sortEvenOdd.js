/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  start = 0;
  end = nums.length - 1;
  ris = [];
  while (start <= end) {

    if (nums[start] % 2 === 1) {
      ris[end] = nums[start];
    } else {
      ris[start] = nums[start];
    }

    if (nums[end] % 2 === 0) {
      ris[start] = nums[end];
    } else {
      ris[end] = nums[end];
    }
    start++;
    end--;
  }
  return ris;
};

console.log(sortArrayByParity([3, 1, 2, 4]));

console.log(sortArrayByParity([2, 1, 3, 4]));

console.log(sortArrayByParity([2,3,4,5,6]));