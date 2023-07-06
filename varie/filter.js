/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  x = [];
  j = 0;

  for (i = 0; i < arr.length; i++) {
    if (fn(arr[i], i) === true && fn(arr[i], i) !== 0) {
      x[j] = arr[i];
      j = j + 1;
    }
  }



  return x;
};

fn = function plusOne(n) {
    return n + 1;
};

a = [-2, -1, 0, 1, 2];

console.log(filter(a, fn));
