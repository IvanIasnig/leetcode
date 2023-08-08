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

var depthFirstValues = (head) => {
  if (head === null) return [];

  let stack = [head];
  let result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
};

// console.dir("-------------");
// console.dir(depthFirstValues(node1), { depth: null });

/*
All'inizio creato un array che mi servirà per creare e salvare i vari nodi,
l'array result servirà solo per pushare all'interno i val dei nodi.
current mi serve per estrarre l'ultimo nodo dall'array (in questo caso per come sono ordinati gli "if" sarà il nodo right)
una volta che tutti i nodi right saranno stati estratti il push avverrà solo sui nodi left
-> output -> [1,3,6,2,5,4]
*/

var recDepthFirstValues = (head) => {
  if (head === null) return [];
  const leftValues = recDepthFirstValues(head.left);
  const rightValues = recDepthFirstValues(head.right);
  return [head.val, ...leftValues, ...rightValues];
};

//console.dir(recDepthFirstValues(node1), { depth: null });

// ---------------------- ES2
const breadthFirstValues = (head) => {
  if (head === null) return [];
  const queue = [head];
  const values = [];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return values;
};

//console.dir(breadthFirstValues(node1), { depth: null });

var recBreadthFirstValues = (head) => {
  if (head === null) return [];
  const leftValues = recDepthFirstValues(head.left);
  const rightValues = recDepthFirstValues(head.right);
  return [head.val, ...leftValues, ...rightValues];
};

//console.dir(recBreadthFirstValues(node1), { depth: null });

// ----------------- Es3
var treeIncludes = (head, value) => {
  if (head === null) return false;
  if (head.val === value) return true;

  return treeIncludes(head.left, value) || treeIncludes(head.left, value);
};

// console.log(treeIncludes(node1, 4));

//----------- es 4

var sum = (head) => {
  if (head === null) return 0;
  return head.val + sum(head.left) + sum(head.left);
};

console.log(sum(node1));

const breadthSum = (head) => {
  if (head === null) return 0;
  const queue = [head];
  let sum = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    sum += current.val;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return sum;
};

console.log(breadthSum(node1));

// ------------- es 5

var min = (head) => {
  if (head === null) return Infinity;
  return Math.min(head.val, min(head.left), min(head.left));
};

console.log(min(node1));

const breadthMin = (head) => {
  if (head === null) return 0;
  const queue = [head];
  let minGlobal = Infinity;

  while (queue.length > 0) {
    const current = queue.shift();
    let temp = current.val;
    minGlobal = Math.min(minGlobal, temp);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return minGlobal;
};

console.log(breadthMin(node1));

// ------------ es 6

var maxVal = (head) => {
  if (head === null) return -Infinity;
  return Math.max(head.val, maxVal(head.left), maxVal(head.right));
};

console.log(maxVal(node1));

var breadthMax = (head) => {
  if (head === null) return 0;
  let maxGlobal = -Infinity;
  let stack = [head];

  while (stack.length > 0) {
    const current = stack.shift();
    let temp = current.val;
    maxGlobal = Math.max(maxGlobal, temp);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return maxGlobal;
};
