class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

var preorderTraversal = function (root) {
  let res = [];

  const rec = (root) => {
    if (root === null) return;
    res.push(root.val);
    return rec(root.left) || rec(root.right);
  };
  rec(root);
  return res;
};

console.dir(preorderTraversal(root), { depth: null });
