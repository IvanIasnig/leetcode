function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
var root = new TreeNode(2);
root.left = new TreeNode(1); //1
root.right = new TreeNode(3);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);

//       2          -> or
//     /  \
//    1   3
//      /  \
//     0    1

var evaluateTree = function (root) {
  if (root === null) return;

  if (root.val == 1) return true;
  if (root.val == 0) return false;
  if (root.val === 2)
    return evaluateTree(root.right) || evaluateTree(root.left);
  if (root.val === 3)
    return evaluateTree(root.right) && evaluateTree(root.left);
};
evaluateTree(root);
