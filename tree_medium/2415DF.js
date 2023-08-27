function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Creazione dei nodi basata sull'input
const node8 = new TreeNode(8);
const node13 = new TreeNode(13);
const node21 = new TreeNode(21);
const node34 = new TreeNode(34);
const node3 = new TreeNode(3, node8, node13);
const node5 = new TreeNode(5, node21, node34);
const root = new TreeNode(2, node3, node5);

var reverseOddLevels = function (root) {
  if (root === null) return null;
  let stack = [root];
  let c = 1;

  while (stack.length > 0) {
    console.log("------------------");
    console.log(stack);
    console.log("c : " + c);
    const current = stack.shift();
    let temp = current.right;
    let temp2 = current.left;

    if (current.right) {
      stack.push(current.right);
      if (current.left) current.right = current.left;
      else {
        current.left = temp;
        current.right = null;
      }
    }
    if (temp2) {
      stack.push(current.left);
      if (current.right) current.left = temp;
      else {
        current.right = current.left;
        current.left = null;
      }
    }
    c++;
  }

  return root;
};

console.dir(reverseOddLevels(root), { depth: null });
