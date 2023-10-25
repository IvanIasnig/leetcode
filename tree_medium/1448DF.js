function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node3 = new TreeNode(3);
const node1_2 = new TreeNode(1);
const node5 = new TreeNode(5);
const node1_1 = new TreeNode(1, node3, null);
const node4 = new TreeNode(4, node1_2, node5);
const root = new TreeNode(3, node1_1, node4);

var goodNodes = function (root) {
  let res = 0;
  let max = root.val;
  let last = root.val;

  var rec = (root) => {
    if (root === null) return;
    if (root.val >= max) {
      res++;
      max = root.val;
    }

    if (root.left && root.right) last = Math.max(root.val, last);
    if (!root.left && !root.right) {
      max = last;
    }

    return rec(root.left) || rec(root.right);
  };

  rec(root);

  return res;
};

console.log(goodNodes(root));
