function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

// var depthFirstValues = (head) => {
//   if (root === null) return [];

//   let stack = [head];
//   let result = [];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);
//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return result;
// };

// console.dir("-------------");
// console.dir(depthFirstValues(node1), { depth: null });

// Inizializzazione:

// Se il nodo di partenza head è null, restituisci un array vuoto, poiché non c'è nulla da esplorare.
// Inizializza uno stack con il nodo di partenza head. Gli stack sono particolarmente utili per le visite in profondità poiché ti permettono di esplorare una "strada" dell'albero fino alla fine prima di tornare indietro.
// Crea un array result vuoto, in cui verranno memorizzati i valori dei nodi visitati nell'ordine in cui vengono visitati.
// Iterazione:

// Mentre lo stack non è vuoto (cioè ci sono ancora nodi da esplorare), ripeti i seguenti passi:
// Rimuovi l'ultimo nodo dallo stack (con pop()) e assegnalo a una variabile current. Questo nodo rappresenta il nodo corrente che stai esplorando.
// Aggiungi il valore del nodo corrente all'array result (con push()).
// Se il nodo corrente ha un figlio sinistro, aggiungilo allo stack.
// Se il nodo corrente ha un figlio destro, aggiungilo allo stack.
// Risultato:

// Una volta che tutti i nodi sono stati esplorati e lo stack è vuoto, restituisci l'array result che contiene i valori di tutti i nodi nell'ordine in cui sono stati visitati.

//TODO: da fare recursive
var recDepthFirstValues = (head) => {
  if (head === null) return [];

  let stack = [head];
  let result = [];
  while (stack.length > 0) {
    console.log(stack);
    const current = stack.pop();
    result.push(current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};

console.dir(recDepthFirstValues(node1), { depth: null });
