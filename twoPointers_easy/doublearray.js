/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  let cicli = nums1.length < nums2.length ? nums1.length : nums2.length;
  let ris = [];
  for (i = 0; i < cicli - 1; i++) {
    if (nums1[0][0] === i && nums2[0][0] === i) {
      ris.push([nums1[i][0], nums1[i][1] + nums2[i][1]]);
      return ris;
    } else {
    }
  }
};

console.log(
  mergeArrays(
    [
      [0, 3],
      [2, 4],
      [3, 6],
      [4, 3],
      [5, 5],
    ],
    [
      [0, 3],
      [2, 1],
      [4, 3],
    ]
  )
);
