/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  blocks = blocks.split("");
  let res = k;

  window = 0;
  for (j = 0; j < blocks.length; j++) {
    if (blocks[j] === "B") {
      blocks[j] = 1;
    } else {
      blocks[j] = 0;
    }
  }

  for (i = 0; i < blocks.length; i++) {
    window = window + blocks[i];
    if (i >= k - 1) {
      res = Math.min(res, k - window);
      window = window - blocks[i - (k - 1)];
    }
  }
  return res;
};

console.log(minimumRecolors("WBWBBBW", 7));
