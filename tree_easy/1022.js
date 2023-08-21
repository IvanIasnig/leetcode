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

let node1 = new TreeNode(0);
let node2 = new TreeNode(1);
let node3 = new TreeNode(0);
let node4 = new TreeNode(1);
let node5 = new TreeNode(0);
let node6 = new TreeNode(0);
let node7 = new TreeNode(1);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;
node2.left = node6;
node2.right = node7;

var sumRootToLeaf = function (root) {
  if (root === null) return [];

  const stack = [{ node: root, path: root.val.toString() }];
  let res = [];

  while (stack.length > 0) {
    const { node, path } = stack.pop();

    if (!node.left && !node.right) {
      bin = 0;
      for (let i = 0; i < path.length; i++) {
        bin = bin * 2 + parseInt(path[i], 10);
      }
      res.push(bin);
    }

    if (node.right) {
      stack.push({ node: node.right, path: path + node.right.val.toString() });
    }

    if (node.left) {
      stack.push({ node: node.left, path: path + node.left.val.toString() });
    }
  }
  const sum = res.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
};

console.dir(sumRootToLeaf(node1), { depth: null });
