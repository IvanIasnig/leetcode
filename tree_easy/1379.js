function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(7);
let node2 = new TreeNode(4);
let node3 = new TreeNode(3);
let node4 = new TreeNode(6);
let node5 = new TreeNode(19);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

var getTargetCopy = function (original, cloned, target) {
  if (cloned === null) return false;
  if (original === target) return cloned;

  return (
    getTargetCopy(original.right, cloned.right, target) ||
    getTargetCopy(original.left, cloned.left, target)
  );
};

console.dir(getTargetCopy(node1, node1, 3));
