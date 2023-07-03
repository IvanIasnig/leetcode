/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sortArrayByParity(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] % 2 > nums[end] % 2) {
            let tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp;
        }

        if (nums[start] % 2 === 0) start++;
        if (nums[end] % 2 === 1) end--;
    }

    return nums;
}


// console.log(sortArrayByParity([3, 1, 2, 4]));
// console.log(sortArrayByParity([2, 1, 3, 4]));
// console.log(sortArrayByParity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
console.log(sortArrayByParity([2, 4, 8, 10, 11, 12]));
console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([2, 3, 4, 5, 6, 7]));
console.log(sortArrayByParity([2,4,5,6,8,9]))

//soluzione brutta
/*
var sortArrayByParity = function (nums) {
  ris = [];
  let p = [];
  let d = [];
  let k = 0;
  let j = 0;
  for (i = 0; i < nums.length; i++) {

    if (nums[i] % 2 === 0){
        p[k] = nums[i]
        k++
    } else {
        d[j] = nums[i]
        j++
    }
  }
  ris = p.concat(d)
  return  ris;
};

*/
