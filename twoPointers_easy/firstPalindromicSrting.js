/**
 * @param {string[]} words
 * @return {string}
 */

var firstPalindrome = function(words) {
    let ris ;
    for (i=0;i<words.length;i++){
        if (ris !== undefined){break;}
        parola = words[i].split("");
        start=0;
        end=parola.length -1
        if(parola.length=== 1) {return parola.join("")}
        while(start<end){
            if (parola[start] !== parola[end]){
                ris = undefined;
                break;
            } else {
                ris = parola 
                start ++
                end--
            }
        }

    }
    if (ris === undefined){return ""}
    return ris.join("")
};

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))