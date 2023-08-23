class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6, null, new TreeNode(8, new TreeNode(7), new TreeNode(9)))
);

var increasingBST = function (root) {
  let res = new TreeNode();
  let temp = res;

  //let arr = []
  var rec = function (root) {
    if (root === null) return;

    rec(root.left);

    temp.right = new TreeNode(root.val);
    temp = temp.right; 
    // arr.push(root.val)

    rec(root.right);
  };
  rec(root);
  return res.right;
};

console.dir(increasingBST(root), { depth: null });
