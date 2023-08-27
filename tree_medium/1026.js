function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const node1 = new TreeNode(1);
const node4 = new TreeNode(4);
const node7 = new TreeNode(7);
const node13 = new TreeNode(13);

const node6 = new TreeNode(6, node4, node7);
const node14 = new TreeNode(14, node13);

const node3 = new TreeNode(3, node1, node6);
const node10 = new TreeNode(10, null, node14);

const root = new TreeNode(8, node3, node10);

var maxAncestorDiff = function (root) {
  if (root === null) return;
  const stack = [root];
  let res = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    let maxCurr = 0;
    let padre = current.val;

    let rec = (root) => {
      if (root === null) return;
      let diff = Math.abs(padre - root.val);
      maxCurr = Math.max(maxCurr, diff);
      return rec(root.left) || rec(root.right);
    };

    rec(current);

    res = Math.max(res, maxCurr);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return res;
};

console.log(maxAncestorDiff(root));

//la mia soluzione gira ma è pesante, chatGPT mi consiglia questa ->
// var maxAncestorDiff = function (root) {
//   let res = 0;

//   function dfs(node, minVal, maxVal) {
//     if (!node) return;

//     // Aggiorna la differenza massima.
//     res = Math.max(
//       res,
//       Math.abs(minVal - node.val),
//       Math.abs(maxVal - node.val)
//     );

//     // Aggiorna i valori minimo e massimo percorrendo l'albero.
//     minVal = Math.min(minVal, node.val);
//     maxVal = Math.max(maxVal, node.val);

//     dfs(node.left, minVal, maxVal);
//     dfs(node.right, minVal, maxVal);
//   }

//   dfs(root, root.val, root.val);

//   return res;
// };
