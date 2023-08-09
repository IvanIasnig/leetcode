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
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node8 = new TreeNode(5);

let node4 = new TreeNode(2);
let node5 = new TreeNode(1);
let node6 = new TreeNode(3);
let node7 = new TreeNode(4);
let node9 = new TreeNode(7);

node1.left = node3;
node1.right = node2;
node3.left = node8;

node4.left = node5;
node4.right = node6;
node5.right = node7;
node6.right = node9;

var mergeTrees = function (root1, root2) {
  if (root1 && root2 === null) return null;
  const stack1 = [root1];
  const stack2 = [root2];

  while (stack1.length > 0 && stack2.length > 0) {
    const current = stack1.pop();
    const current2 = stack2.pop();
    current.val += current2.val;

    if (current.left) {
      stack1.push(current.left);
      if (current2.left) stack2.push(current2.left);
    }
    if (current.right) {
      stack1.push(current.right);
      if (current2.right) stack2.push(current2.right);
    }
    if (!current.right && current2.right) {
      stack1.push(current2.left);
    }
    if (!current.left && current2.left) {
      stack1.push(current2.left);
    }
  }
  return root1;
};

console.dir(mergeTrees(node1, node4), { depth: null });


// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// let node1 = new TreeNode(1);
// let node2 = new TreeNode(2);
// let node3 = new TreeNode(3);
// let node4 = new TreeNode(4);
// let node5 = new TreeNode(5);
// let node6 = new TreeNode(6);

// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.right = node6;

// var depthFirstValues = (head) => {
//   if (head === null) return [];

//   let stack = [head];
//   let result = [];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);
//     console.dir("-------------");
//     result.push(current.val);
//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return result;
// };

// console.dir(depthFirstValues(node1), { depth: null });
