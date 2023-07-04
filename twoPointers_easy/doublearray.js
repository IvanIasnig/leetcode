var mergeArrays = function (nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  let x = nums1.length - 1;
  let lung1 = nums1[x][0];
  let y = nums2.length - 1;
  let lung2 = nums2[y][0];
  let cicli = lung1 < lung2 ? lung2 : lung1;
  let ris = [];

  for (i = 0; i < cicli; i++) {

    if(nums1[p1] === undefined){
      nums1[p1] = [0,0]
    }

    if(nums2[p2] === undefined){
      nums2[p2] = [0,0]
    }

    if ((nums1[p1][0] === i + 1 && nums2[p2][0] === i + 1)) {
      ris.push([i + 1, nums1[p1][1] + nums2[p2][1]]);
      p1++;
      p2++;

    } else if (nums1[p1][0] === i + 1 && nums2[p2][0] != i + 1) {
      ris.push([i + 1, nums1[p1][1]]);
      p1++;

    } else if (nums1[p1][0] != i + 1 && nums2[p2][0] === i + 1) {
      ris.push([i + 1, nums2[p2][1]]);
      p2++;

    }
  }
  return ris;
};

console.log(
  mergeArrays(
    [
      [1, 4],
      [2, 6],
      [6,8]
    ],
    [
      [3, 3],
      [4, 3],
      [5,6],
      [6,3]
    ]
  )
);

// console.log(
//   mergeArrays(
//     [
//       [0, 3],
//       [2, 4],
//       [3, 6],
//       [4, 3],
//       [5, 5],
//     ],
//     [
//       [0, 3],
//       [2, 1],
//       [4, 3],
//     ]
//   )
// );
