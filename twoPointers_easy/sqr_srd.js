/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

var sortedSquares = function (nums) {
  start = 0;
  end = nums.length - 1;
  i = nums.length - 1
  ris = [];
  while (start <= end) {
    qs = nums[start] * nums[start];
    qe = nums[end] * nums[end];
    if (qs >= qe) {
      ris[i] = qs;
      start++;
    } else {
        ris[i] = qe
        end--
    }
    i--
  }
  return ris;
};

console.log(sortedSquares([-8, -7, -6, -4, -3, 0, 1, 4, 4, 7]));

/* Ho chiesto a chatGPT se esisteva la possibilità di usare una soluzione inplace  usando i two pointers e mi ha detto di no,
secondo me si può fare scalando ogni volta il ris[end], sarebbe interessante da provare */