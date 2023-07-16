/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  vowels = ["a", "e", "i", "o", "u"];
  end = 0;
  maxSeen = 0;
  currSum = 0;
  s = s.split("");

  while (end < s.length) {
    if (vowels.includes(s[end])) {
      currSum++;
    }
    if (end >= k -1) {
      maxSeen = Math.max(currSum, maxSeen);
      if (vowels.includes(s[end - (k - 1)])) {
        currSum--;
      }
    }
    end++;
  }
  return maxSeen;
};

console.log(maxVowels("leetcode", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("ibpbhixfiouhdljnjfflpapptrxgcomvnb", 33));
