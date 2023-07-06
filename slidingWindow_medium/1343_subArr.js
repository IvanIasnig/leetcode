/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let currSum = 0;
  let ris = 0;

  for (let i = 0; i < arr.length; i++) {
    let av;
    currSum = currSum + arr[i];
    if (i >= k - 1) {
      av = currSum / k;
      if (av >= threshold) {
        ris++;
      }
      currSum = currSum - arr[i - (k - 1)];
    }
  }
  return ris;
};

console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
