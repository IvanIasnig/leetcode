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

//l'esercizio fatto da me non utilizza correttamente la tenica, per farlo correttamente avrei dovuto fare che: 

// var reverseWords = function(s) {
//     let words = s.split(' ');
    
//     for (let i = 0; i < words.length; i++) {
//         let start = 0;
//         let end = words[i].length - 1;
//         let arr = words[i].split('');
        
//         while (start < end) {
//             let temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;

//             start++;
//             end--;
//         }
        
//         words[i] = arr.join('');
//     }
    
//     return words.join(' ');
// };

