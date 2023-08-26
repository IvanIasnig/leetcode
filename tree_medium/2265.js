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

var averageOfSubtree = function (root) {
  if (root === null) return;
  let res = 0;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    let c = 0;
    let sum = 0;

    var rec = (root) => {
      if (root === null) return;
      c++;
      sum += root.val;
      return rec(root.left) || rec(root.right);
    };

    rec(current);

    if (current.val == Math.floor(sum / c)) res++;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return res
};

console.log(averageOfSubtree(root));
