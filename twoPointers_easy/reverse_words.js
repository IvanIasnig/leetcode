/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(" ");
  ris = [];
  for (i = 0; i < s.length; i++) {
    let p = [];
    arr = s[i];
    for (k = 0; k < arr.length; k++) {
      p[k] = arr[arr.length - k - 1];
    }
    ris[i] = p;
    if (i !== s.length - 1) {
      p = p.push(" ");
    }
  }
  
  return ris.flat().join("*_1").replaceAll("*_1","");
};

console.log(reverseWords("vector<string> split (string s, char delimiter)"));

//return rr.toString().replaceAll(",","");
