var reverseString = function(s) {

    start = 0;
    end= s.length -1;
    m=[]
    while (start < end){
        m[start]=s[start]
        s[start] = s[end]
        s[end] = m[start] 
        start ++
        end --
    }

    return s
};

console.log(reverseString(["h","e","l","l","o"]))

//l'utilizzo è corretto, però potevo utimizzare tutto, chatGPT mi dice che: 

/*

L'approccio che stai utilizzando è corretto e in linea con l'idea generale del metodo "two pointers". Tuttavia, l'implementazione potrebbe essere ottimizzata.
Stai utilizzando un array aggiuntivo `m` per memorizzare temporaneamente i valori dell'array `s`. Questo è superfluo e viola il requisito "O(1) extra memory". 
Invece, puoi utilizzare una variabile temporanea per eseguire lo scambio. Ecco come potrebbe sembrare:


var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        let temp = s[start]; 
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));

In questo modo, stai effettivamente utilizzando solo una quantità costante di memoria extra (la variabile `temp`),
 e stai modificando l'array `s` direttamente ("in-place"), soddisfacendo così i requisiti del problema.

*/