// var rec = function (num) {

//     if(num === 0 || num === 1){
//         return 1;
//     }
//     a = num - 1
//     return num * rec(a)
// }

// console.log(rec(5))

var rec2 = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * rec2(num - 1);
};

console.log(rec2(5));

/*
Quando passi un'espressione come parametro a una funzione, l'espressione viene prima valutata e poi il risultato viene passato alla funzione.
Quindi, quando scrivi rec2(num-1), stai in realtà passando il risultato dell'operazione num-1 alla funzione. 
Questa operazione viene eseguita prima che la funzione venga chiamata.

Ad esempio, quando num è 5, l'espressione num-1 viene valutata a 4, e quindi la funzione rec2 viene chiamata con 4 come argomento.
Questo è un concetto fondamentale in programmazione noto come "valutazione delle espressioni". 
Prima di chiamare una funzione o di eseguire un'istruzione, tutte le espressioni nelle argomentazioni o nell'istruzione vengono prima valutate.

La chiave sta nel capire la differenza tra la definizione di una funzione e la chiamata di una funzione.
Quando definisci una funzione, stai specificando quali parametri accetta. Questi parametri sono variabili,
e vengono utilizzati come segnaposto che rappresentano i valori che verranno effettivamente passati quando la funzione viene chiamata. 

Quindi, nella definizione di una funzione, non è possibile usare un'espressione come (num - 1) come parametro,
perché (num - 1) non è una variabile, è un'operazione.
D'altro canto, quando chiami una funzione, puoi passare qualsiasi valore o espressione come argomento,
purché il risultato dell'espressione sia di un tipo di dato che la funzione può accettare. 

Quindi, quando chiami rec2(num - 1), l'espressione num - 1 viene prima valutata e poi il risultato viene passato alla funzione rec2.
*/

/*
La maggior parte dei linguaggi di programmazione moderni, inclusi JavaScript, Python, Java, C#, Ruby, e molti altri, 
permettono di passare espressioni come argomenti quando si chiamano funzioni,
e queste espressioni vengono valutate prima che la chiamata della funzione sia eseguita.

Tuttavia, ci possono essere alcune differenze su come i linguaggi di programmazione gestiscono la valutazione delle espressioni e l'ordine in cui
vengono valutate. Ad esempio, alcuni linguaggi usano la valutazione "eager", in cui tutte le espressioni vengono valutate non appena possibile,
mentre altri usano la valutazione "lazy", in cui le espressioni vengono valutate solo quando i loro risultati sono effettivamente necessari.

Inoltre, alcuni linguaggi di programmazione, come C e C++, permettono agli sviluppatori di manipolare direttamente i puntatori, 
il che può portare a comportamenti più complessi e a volte inaspettati.

Ma in generale, la possibilità di passare espressioni come argomenti di funzioni è un concetto molto comune nella programmazione, 
e troverai che è supportato in quasi tutti i linguaggi che incontrerai.
*/
