function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

var sumOfLeftLeaves = function (root) {
  let sum = 0;

  var rec = function (root) {
    if (root === null) return;

    if (root.left && !root.left.left && !root.left.right) sum += root.left.val;

    return rec(root.left) || rec(root.right);
  };
  rec(root);
  return sum;
};

console.log(sumOfLeftLeaves(root));

