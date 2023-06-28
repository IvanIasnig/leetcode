/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let j = jewels.split("");
  let s = stones.split("");
  let num = 0;

  for (i = 0; i < j.length; i++) {
    for ( k = 0; k < s.length; k++){
        if(j[i] === s[k]){
            num ++;
        }
    }
  }
  return num;
};

console.log(numJewelsInStones("aBc", "aAAbBCC"));

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
