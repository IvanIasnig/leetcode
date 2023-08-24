function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var root = new TreeNode(90);
root.left = new TreeNode(69);
root.left.left = new TreeNode(49);
root.left.right = new TreeNode(89);
root.left.right.right = new TreeNode(52);

var minDiffInBST = function (root) {
  if (root === null) return;
  const stack = [root];
  const arr = [];

  let res = Infinity;

  while (stack.length > 0) {
    const current = stack.shift();
    arr.push(current.val);

    for (let i = 0; i < arr.length - 1; i++) {
      res = Math.min(Math.abs(current.val - arr[i]), res);
    }

    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }

  return res;
};

console.log(minDiffInBST(root));
