/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++){
        for(k=i +1;k<nums.length;k++){
            if(nums[i]+nums[k]===target){return[i,k]}
        }
    }
};

console.log(twoSum([3,2,4], 6))