function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const nodo1_4 = new TreeNode(0);
const nodo1_3 = new TreeNode(1, null, nodo1_4);
const nodo1_2 = new TreeNode(1);
const nodo1_1 = new TreeNode(1, nodo1_2, nodo1_3);
const nodo0_2 = new TreeNode(0);
const nodo0_1 = new TreeNode(1, null, nodo0_2);
const radice = new TreeNode(1, nodo1_1, nodo0_1);

var pruneTree = function (root) {
  let res = new TreeNode(0,null,null);
  var rec = (root) => {
    if(root === null) return;
    res = root;
    return rec(root.left) || rec(root.right)
  };
  rec(root)
  return res;
};

console.dir(pruneTree(radice));
