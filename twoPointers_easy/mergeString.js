/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  word1 = word1.split("");
  word2 = word2.split("");
  ris = [];
  i = 0;
  k = 0;
  while (word2[k] || word1[k]) {
    if (word1[k]) {
      ris[i] = word1[k];
      ris[i + 1] = word2[k];
      i = i + 2;
    } else {
      ris[i] = word2[k];
      i = i + 1;
    }
    k++;
  }

  return ris.toString().replaceAll(",","")
};

console.log(mergeAlternately("pqrst", "abc"));

/*

L'esercizio è stato svolto correttamente con la tecnica dei two pointers, tuttavia potevo
risolverlo in una maniera più efficiente, inoltre per pulizia del codice avevo implementato 
anche un controllo sull'esistenza di word2[k] dentro al primo if, che non servendomi ne per
il runtime ne per la memoria è stato tolto (senza il controllo il ris in formato array mi 
returna degli undefined, che poi scompaiono con la trasposizione a stringa). La soluzione 
che mi da chatGPT è: 

var mergeAlternately = function(word1, word2) {
    word1 = word1.split("");
    word2 = word2.split("");
    let ris = [];
    let i = 0;
    let k = 0;
  
    while (word1[k] || word2[k]) {
        if (word1[k]) {
            ris[i] = word1[k];
            i++;
        }
        if (word2[k]) {
            ris[i] = word2[k];
            i++;
        }
        k++;
    }
  
    return ris.join("");
};


*/
