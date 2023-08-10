/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);

let node4 = new TreeNode(1);
let node5 = new TreeNode(2);
let node6 = new TreeNode(3);

node1.left = node2;
node1.right = node3;

node4.left = node5;
node4.right = node6;

var isSameTree = function (p, q) {
  //   console.log(p.val);
  //   console.log(q.val);
  //   console.log("_____________________");
  if (!p && !q) return true;

  if ((!p && q) || (p && !q) || p.val !== q.val) {
    return false;
  }

  //   if (p.left && q.left) return isSameTree(p.left, q.left);
  //   if (p.right && q.right) return isSameTree(p.right, q.right);

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(node1, node4));
