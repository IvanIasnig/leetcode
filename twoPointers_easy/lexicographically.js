//https://leetcode.com/problems/lexicographically-smallest-palindrome/

var makeSmallestPalindrome = function (s) {
  const alfa = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  ris = [];
  s = s.split("");
  let lChar = s.length;
  for (i = 0; i < Math.floor(lChar / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      if (alfa[s[i]] < alfa[s[[s.length - i - 1]]]) { //8<7
        s[s.length - i - 1] = s[i]
      } else {
        s[i] = s[s.length - i - 1]
      }
    }
  }
  s = s.toString().replaceAll(",", "");
  return s;
};

console.log(makeSmallestPalindrome("egcfe"));

console.log(makeSmallestPalindrome("abcd"));

// last = s[s.length-2]

//modo per contare il numero minimo di operazioni:
// var makeSmallestPalindrome = function (s) {
//     ris = 0;
//     s = s.split("");
//     let lChar = s.length;
//     for (i = 0; i < Math.floor(lChar / 2); i++) {
//       if (s[i] !== s[s.length - i -1]) {
//         ris++;
//       }
//     }
//     return ris;
//   };

// if (alfa.c){return alfa.c}
// else {return false}


//---------------------leetcode
// const makeSmallestPalindrome = function (s) {
//     const n = s.length
//     s = s.split('')
//     const halfN = Math.trunc(n / 2)
//     for (let i = 0; i < halfN; i++) {
//       if (s[i] !== s[n - 1 - i]) {
//         if (s[i] < s[n - 1 - i]) {
//           s[n - 1 - i] = s[i]
//         } else {
//           s[i] = s[n - 1 - i]
//         }
//       }
//     }
//     return s.join('')
//   }