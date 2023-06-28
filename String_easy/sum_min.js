/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") {
      x++;
    } else {
      x--;
    }
  }
  return x;
};

console.log(
  finalValueAfterOperations(["X++", "X++", "X++", "++X", "--X", "X--"])
);

// Input: operations = ["--X","X++","X++"]
