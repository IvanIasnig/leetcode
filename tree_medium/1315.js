function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const node9 = new TreeNode(9);
const node1 = new TreeNode(1);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

const node2 = new TreeNode(2, node9);
const node7 = new TreeNode(7, node1, node4);
const node1_2 = new TreeNode(1);
const node3 = new TreeNode(3, null, node5);

const node7_2 = new TreeNode(7, node2, node7);
const node8 = new TreeNode(8, node1_2, node3);

const root = new TreeNode(6, node7_2, node8);

var sumEvenGrandparent = function (root) {
  if (root === null) return;
  const stack = [root];
  let res = 0;

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.val % 2 === 0) {
      if (current.left) {
        if (current.left.left) res += current.left.left.val;
        if (current.left.right) res += current.left.right.val;
      }
      if (current.right) {
        if (current.right.left) res += current.right.left.val;
        if (current.right.right) res += current.right.right.val;
      }
    }

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return res;
};

console.log(sumEvenGrandparent(root));
