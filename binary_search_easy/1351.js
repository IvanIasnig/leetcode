// la soluzione non è ottimale perchè ho usato il reverse per ogni array, potre costruirlo al contrario ma non ho voglia, ho usato il reverse perc avere più ordine mentsale
// var countNegatives = function (grid) {
//     let ris = 0;

//   for (i = 0; i < grid.length; i++) {
//     let arr = grid[i].reverse();
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//       let middle = left + Math.floor((right - left) / 2);
//       if ( arr[middle] < 0) {
//         ris= ris + middle - left + 1
//         left = middle + 1;
//         console.log(ris)
//       } else {
//         right = middle - 1;
//       }
//     }
//   }
//   return ris
// };

//soluzione rifatta meglio

var countNegatives = function (grid) {
  let ris = 0;

  for (i = 0; i < grid.length; i++) {
    let arr = grid[i];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let middle = left + Math.floor((right - left) / 2);
      if (arr[middle] < 0) {
        ris = ris + right - middle + 1;
        right = middle - 1;
        console.log(ris);
      } else {
        left = middle + 1;
      }
    }
  }
  return ris;
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
