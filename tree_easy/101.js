class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//        1
//      /   \
//     2     2
//    / \   / \
//   3   4 4   3

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

var isSymmetric = function (root) {
  if (root === null) return true;
  var rec = (rootLeft, rootRight) => {
    if (rootLeft === null && rootRight === null) return true;
    if (rootLeft === null || rootRight === null) return false;
    if (rootLeft.val !== rootRight.val) return false;

    return (
      rec(rootLeft.left, rootRight.right) && rec(rootLeft.right, rootRight.left)
    );
  };

  return rec(root.left, root.right);
};

console.log(isSymmetric(root));

var Y = function (gen) {
  return (function (f) {
    return f(f);
  })(function (f) {
    return gen(function () {
      return f(f).apply(null, arguments);
    });
  });
};

console.log(Y([1,2,3]))
