/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
// var shortestToChar = function (s, c) {
//   start = 0;
//   end = s.length - 1;
//   s = s.split("e");
//   ris= []
//   for (str of s) {
//     let arr = [];
//     for (i=0;i<str.length; i++) {
//       arr.push(i+1);
//     }
//     ris.push(arr.reverse())
//   }
//   return ris
// };


var shortestToChar = function(s, c) {
    start = 0;
    end = s.length - 1
    s = s.split("") 
    while (start <= end){
        if (s[start] === "e"){
            s[start] = 0;
        } else {
            s[start] = 1;
        }
        if (s[end] === "e") {
            s[end] = 0;
        } else {
            s[end] = 1
        }

        start ++
        end--
    }
    return s
};

console.log(shortestToChar("loveleetcode", "e"));

