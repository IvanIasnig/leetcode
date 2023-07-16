/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let res = 0;

  for (i = 0; i < grid.length; i++) {
    let arr = grid[i].reverse();
    let lower = 0;
    let upper = arr.length - 1;

    while (lower <= upper) {
      let middle = lower + Math.floor((upper - lower) / 2);
return middle
      if ( arr[middle] < 0) {
        
        upper = middle - 1;
      } else {
        lower = middle + 1;
      }
    }
  }
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);

// [-1, 2, 3, 4],
// [-1, 1 , 2, 3],
// [-2, -1, 1, 1],
// [-3, -2, -1, -1]
