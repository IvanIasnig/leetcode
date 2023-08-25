function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
//const node10 = new TreeNode(10);
const node9 = new TreeNode(9 /* node10 */);
const node1_1 = new TreeNode(1);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

const node2 = new TreeNode(2, node9);
const node7_1 = new TreeNode(7, node1_1, node4);
const node1_2 = new TreeNode(1);
const node3 = new TreeNode(3, null, node5);

const node7_2 = new TreeNode(7, node2, node7_1);
const node8 = new TreeNode(8, node1_2, node3);

const root = new TreeNode(6, node7_2, node8);

var deepestLeavesSum = function (root) {
  if (!root) return;
  const sum = [];

  var rec = function (root, n = 0) {
    if (!root) return;
    if (sum[n] === undefined) sum[n] = 0;
    sum[n] += root.val;

    return rec(root.left, n + 1) || rec(root.right, n + 1);
  };
  rec(root);
  return sum.pop();
};

console.dir(deepestLeavesSum(root), { depth: null });
