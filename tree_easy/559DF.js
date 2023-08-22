function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);
let node8 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;
node2.left = node6;
node2.right = node7;
node5.left = node8;

var maxDepth = function (root) {
  if (root === null) return 0;

  return Math.max(maxDepth(root.right) || maxDepth(root.left)) + 1;
};

console.dir(maxDepth(node1), { depth: null });
