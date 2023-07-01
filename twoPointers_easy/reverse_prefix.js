/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  word = word.split("");

  if (word.includes(ch)) {
    start = 0;
    end = word.length - 1;
  
    x = [];
    fine = [];
  
    for (i = 0; i < word.length; i++) {
      if (word[i] !== ch) {
        x[start] = word[i];
        start++;
      } else {
        break;
      }
    }
  
    while (end > x.length ) {
      fine[i] = word[end ];
      end --
      i=i+1
    }
  
    y = [[ch], x.reverse(), fine.reverse()];
    return y.toString().replaceAll(",", "");
  } else {
    return word.toString().replaceAll(",", "");
  }
};

console.log(reversePrefix("abc", "z"));

/*
sto esercizio era abbastanza nosense, non ho usato i twopointers (non servivano nemmeno) e potevo risolvere in un paio di
righe di codice usando i metodi split, indexOf, slice e reverse.
*/


/*
soluzione leetcode

/*

var reversePrefix = function (word, ch) {

    let wordArr = word.split('');
    let start = 0;
    let end = word.indexOf(ch);
  
    while (start <= end) {
      
      const temp = wordArr[start];
      wordArr[start] = wordArr[end];
      wordArr[end] = temp;
  
      start++;
      end--;
    }
  
    return wordArr.join('');
  };

*/