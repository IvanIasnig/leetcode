// var numberOfSubarrays = function (nums, k) {
//   let start = 0;
//   let end = 0;
//   let odd = 0;
//   let currSum = 0;

//   while (end < nums.length) {
//     if (nums[end] % 2 === 1) {
//       odd++;
//     }
//     end++;

//     if (odd > k || (odd === k && end === nums.length - 1)) {
//       if (end !== nums.length - 1 && odd > k) {
//         end--;
//       }
//       odd--;

//       let left = start;
//       let right = end;
//       while (nums[left] % 2 == 0 && nums[right] % 2 == 0) {
//         if (nums[left] % 2 == 0) {
//           left++;
//         }
//         if (nums[right] % 2 == 0) {
//           right--;
//         }
//       }
//       currSum = currSum + (left - start + 1) * (end - right + 1);
//       // currSum = currSum + 1;

//       while (nums[start] % 2 == 0) {
//         start++;
//       }
//       start++;
//     }
//   }
//   return currSum;
// };

var numberOfSubarrays = function (nums, k) {
  let start = 0;
  let end = 0;
  let odd = 0;
  let currSum = 0;

  while (end < nums.length) {
    if (nums[end] % 2 === 1) {
      odd++;
    }
    

    if (odd > k || (odd === k && end === nums.length - 1)) {
      if ( odd !== k) {
        end--;
      }
      odd--;

      currSum = currSum + 1;
    }

    end++;

  }
  return currSum;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
//console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));

var numberOfSubarrays = function (nums, k) {
  let start = 0;
  let end = 0;
  let odd = 0;
  let currSum = 0;

  while (end < nums.length) {
      if (nums[end] % 2 === 1) {
          odd++;
      }

      if (odd === k) {
          let count = 1;

          while (end + 1 < nums.length && nums[end + 1] % 2 === 0) {
              count++;
              end++;
          }

          while (odd === k) {
              currSum += count;
              if (nums[start] % 2 === 1) {
                  odd--;
              }
              start++;
          }
      }
      end++;

  }
  return currSum;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));