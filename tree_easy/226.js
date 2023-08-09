/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(4);
let node2 = new TreeNode(2);
let node3 = new TreeNode(7);
let node4 = new TreeNode(1);
let node5 = new TreeNode(3);
let node6 = new TreeNode(6);
let node7 = new TreeNode(9);

//node1.left = node2;
node1.right = node3;
// node2.left = node4;
//node2.right = node5;
node3.left = node6;
//node3.right = node7;

var invertTree = function (root) {
  if (root === null) return null;
  let stack = [root];
  while (stack.length > 0) {
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
  }

  return root;
};

console.dir(invertTree(node1), { depth: null });
