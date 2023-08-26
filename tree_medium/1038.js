function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Costruisci i nodi partendo dal livello più basso
const node0 = new TreeNode(0);
const node3 = new TreeNode(3);
const node8 = new TreeNode(8);
const node2 = new TreeNode(2, null, node3);
const node5 = new TreeNode(5);
const node7 = new TreeNode(7, null, node8);
const node1 = new TreeNode(1, node0, node2);
const node6 = new TreeNode(6, node5, node7);

// Nodo radice
const root = new TreeNode(4, node1, node6);

var bstToGst = function (root) {
  let res = root;
  let temp = 0;
  var rec = (root) => {
    if (root === null) return;

    rec(root.right);

    root.val += temp;
    temp = root.val;

    rec(root.left);
  };
  rec(root);
  return res;
};

console.log(bstToGst(root));
