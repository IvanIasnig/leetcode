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
 * @return {string[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(5);

node1.left = node2;
node1.right = node3;
node3.right = node4;

var findTarget = function (root, k) {
  if (root === null) return 0;
  const stack = [root];
  const numbers = [];

  while (stack.length > 0) {
    const current = stack.shift();
    numbers.push(current.val);

    if (numbers.includes(k - current.val) && k - current.val !== current.val) return true;

    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return false;
};

console.log(findTarget(node1, 8));
