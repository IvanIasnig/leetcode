var countGoodSubstrings = function(s) {
    s = s.split("")
    let currString = [];
    let ris = 0;
    for (i = 0; i < s.length; i++) {
      currString = currString + s[i];
      if (i >= 2) {

        if(s[i] != s[i-1] && s[i] != s[i-2] && s[i-1] != s[i-2]){
            ris++
        }
        currString = currString - s[i - 2];
      }
    }
    return ris;
  };
  
  console.log(countGoodSubstrings("aababcabc"))