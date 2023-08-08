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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(10);
let node2 = new TreeNode(15);
let node3 = new TreeNode(5);
let node4 = new TreeNode(3);
let node5 = new TreeNode(7);
let node6 = new TreeNode(15);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

var rangeSumBST = function (root, low, high) {
  if (root === null) return null;
  let sum = 0;
  let stack = [root];
  while (stack.length > 0) {
    const current = stack.shift();
    let temp = current.val;
    if (temp >= low && temp <= high) sum += temp;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return sum;
};

console.dir(rangeSumBST(node1, 7, 15));
