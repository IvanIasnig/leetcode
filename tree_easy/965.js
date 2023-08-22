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
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// let node1 = new TreeNode(4);
// let node2 = new TreeNode(2);
// let node3 = new TreeNode(7);
// let node4 = new TreeNode(1);
// let node5 = new TreeNode(3);
// let node6 = new TreeNode(6);
// let node7 = new TreeNode(9);
// let node8 = new TreeNode(9);

// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.left = node6;
// node3.right = node7;
// node7.right = node8

let node0 = new TreeNode(1);
let node1 = new TreeNode(1);
let node2 = new TreeNode(1);
let node3 = new TreeNode(1);
let node4 = new TreeNode(1);
let node7 = new TreeNode(1);
let node10 = new TreeNode(1);
let node11 = new TreeNode(1);

node0.left = node1;
node0.right = node2;
node1.left = node3;
node1.right = node4;
node3.left = node7;
node4.right = node10;
node7.left = node11;

var isUnivalTree = function (root) {
  const target = root.val;
  var rec = (root) => {
    if (root === null) return true;
    if (root.val !== target) return false;

    return rec(root.left) && rec(root.right);
  };
  return rec(root);
};

console.log(isUnivalTree(node0));
