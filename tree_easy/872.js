/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node0 = new TreeNode(0);
let node1 = new TreeNode(-3);
let node2 = new TreeNode(-2);
let node3 = new TreeNode(-9);
let node4 = new TreeNode(-8);
let node7 = new TreeNode(2);
let node10 = new TreeNode(-5);
let node11 = new TreeNode(5);

node0.left = node1;
node0.right = node2;
node1.left = node3;
node1.right = node4;
node3.left = node7;
node4.right = node10;
node7.left = node11;

let rootNode = new TreeNode(1);
let leftNode = new TreeNode(3);
let rightNode = new TreeNode(-4);
let leftLeftNode = new TreeNode(-1);
let leftRightNode = new TreeNode(-2); // leaf
let rightLeftNode = new TreeNode(0);
let rightRightNode = new TreeNode(2);
let rightLeftLeftNode = new TreeNode(5); // leaf
let rightRightRightNode = new TreeNode(-5); // leaf

rootNode.left = leftNode;
rootNode.right = rightNode;
leftNode.left = leftLeftNode;
leftNode.right = leftRightNode;
rightNode.left = rightLeftNode;
rightNode.right = rightRightNode;
rightLeftNode.left = rightLeftLeftNode;
rightRightNode.right = rightRightRightNode;

var leafSimilar = function (root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (root1 === null) return false;
  if (root2 === null) return false;

  const stack = [root1];
  const stack2 = [root2];

  let arr1 = [];
  let arr2 = [];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.right === null && current.left === null) arr1.push(current.val);

    if (current.left) stack.push(current.left);

    if (current.right) stack.push(current.right);
  }

  while (stack2.length > 0) {
    const current2 = stack2.pop();

    if (current2.right === null && current2.left === null)
      arr2.push(current2.val);

    if (current2.left) stack2.push(current2.left);

    if (current2.right) stack2.push(current2.right);
  }

  console.log(arr1, arr2)
  function arraysAreEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
  
  return arraysAreEqual(arr1, arr2);
};

console.dir(leafSimilar(node0, rootNode));
