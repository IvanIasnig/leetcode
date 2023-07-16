var maximumCount = function (nums) {
  neg = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < 0) {
      neg = neg + middle - left + 1;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  zero = neg;

  while (nums[zero] === 0) {
    zero++;
  }
  zero = zero - neg;

  return Math.max(neg, nums.length - neg - zero);
};

console.log(maximumCount([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));

console.log(
  maximumCount([-1563, -236, -114, -55, 427, 447, 687, 752, 1021, 1636])
);
