function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const node0 = new TreeNode(0);
const node1 = new TreeNode(1);
const node6 = new TreeNode(6);
const node8 = new TreeNode(8, node0, node1);
const node5 = new TreeNode(5, null, node6);
const root = new TreeNode(4, node8, node5);

const node10 = new TreeNode(10);
const node11 = new TreeNode(11);
const node15 = new TreeNode(15, null, node11);
const smallRoot = new TreeNode(12, node10, node15);

var getAllElements = function (root1, root2) {
  if (root1 === null && root2 === null) return;
  const res = [];

  var rec = (root) => {
    if (!root) return;
    res.push(root.val);

    return rec(root.left) || rec(root.right);
  };
  rec(root1);
  rec(root2);

  return res.sort((a, b) => a - b);
};

console.log(getAllElements(root, smallRoot));
