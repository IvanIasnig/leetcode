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
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(3);
let node2 = new TreeNode(2);
let node3 = new TreeNode(1);

node1.left = node2;
node1.right = node3;

var checkTree = function (root) {
  if (root.val === root.left.val + root.right.val) return true;
  else return false;
};

console.log(checkTree(node1));
