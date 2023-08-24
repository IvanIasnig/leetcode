function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

var inorderTraversal = function (root) {
  let res = [];
  var rec = function (root) {
    if (root === null) return;

    rec(root.left);
    res.push(root.val);
    rec(root.right);
  };
  rec(root);
  return res;
};

console.log(inorderTraversal(root));
