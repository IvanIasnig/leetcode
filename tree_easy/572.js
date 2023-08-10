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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(3);
let node2 = new TreeNode(4);
let node3 = new TreeNode(5);
let node4 = new TreeNode(1);
let node5 = new TreeNode(2);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

let subNode1 = new TreeNode(4);
let subNode2 = new TreeNode(1);
let subNode3 = new TreeNode(2);

subNode1.left = subNode2;
subNode1.right = subNode3;



var isSubtree = function (root, subRoot) {
    console.log(String(root))
    console.log(JSON.stringify(subRoot))
    console.log("__________")
  if (!root) return false;
  if (JSON.stringify(root) == JSON.stringify(subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

console.log(isSubtree(node1, subNode1));
