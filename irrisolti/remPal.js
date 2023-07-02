/*sto esercizio era un cesso e non si capiva nulla, se vuoi provare a rifarlo
leggi prima i commenti su leetcode e guarda i dislike*/
// https://leetcode.com/problems/remove-palindromic-subsequences/description/

var removePalindromeSub = function (s) {
  let ris = 0;
  s = s.split("");
  let pal = []; //dichiara questa variabile è stato complesso
  let ver;
  for (i = 0; i < s.length; i = i + pal.length) {
    for (k = i; k < s.length; k++) {
      stringatemp = s.slice(i, k + 1);
      start = 0;
      end = stringatemp.length - 1;
      while (start <= end) {
        if (stringatemp[start] === stringatemp[end]) {
          ver = true
          start++;
          end--;
        } else {
            ver = false;
          break;
        }
      }
      if (ver===true){
        pal = stringatemp.slice(0, stringatemp.length + 1);
      }
    }
      ris++;
  }
  return ris; //qui dovrò aumentare il contatore per l'output
};

console.log(removePalindromeSub("bbaabaaa"));

// output 5

/*    

ris = [];
  for (i = 0; i < s.length; i++) {
    stringatemp = s[i]
  }



   start = 0;
    end = s.length -1;

    while (start < end){
        if (s[start] === s[end]){
            start ++
            end --
        } else {
            return "non è palindroma"
        }
    }
    return "è palindroma"
     */
