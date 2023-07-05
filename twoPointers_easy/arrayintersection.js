/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    ris = [];
    for(n of nums1){
        if(nums2.includes(n)){
            if (!ris.includes(n)){
            ris.push(n)
            }
        }
    }
    return ris
}

console.log(intersection([2,1], [1,1]))

//avrei dovuto usare i two pointers ma mi sembrava inutile rindondante