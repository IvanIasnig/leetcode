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

// let node1 = new TreeNode(1);
// let node2 = new TreeNode(2);
// let node3 = new TreeNode(3);
// let node8 = new TreeNode(5);

// let node4 = new TreeNode(2);
// let node5 = new TreeNode(1);
// let node6 = new TreeNode(3);
// let node7 = new TreeNode(4);
// let node9 = new TreeNode(7);

// node1.left = node3;
// node1.right = node2;
// node3.left = node8;

// node4.left = node5;
// node4.right = node6;
// node5.right = node7;
// node6.right = node9;

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);

let node4 = new TreeNode(1);
let node5 = new TreeNode(2);
let node6 = new TreeNode(3);

node1.left = node2;
node2.left = node3;

node4.right = node5;
node5.right = node6;

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  const stack1 = [root1];
  const stack2 = [root2];

  root1.val += root2.val;

  while (stack1.length > 0 || stack2.length > 0) {
    console.dir(root1, { depth: null });
    console.log("*************************");
    const current = stack1.pop();
    const current2 = stack2.pop();

    if (current && current2) {
      if (current.right && current2.right) {
        stack1.push(current.right);
        stack2.push(current2.right);
        current.right.val += current2.right.val;
      }

      if (current.left && current2.left) {
        stack1.push(current.left);
        stack2.push(current2.left);
        current.left.val += current2.left.val;
      }

      if (current.left && !current2.left) {
        stack1.push(current.left);
      }

      if (current.right && !current2.right) {
        stack1.push(current.right);
      }

      if (current2.right && !current.right) {
        current.right = current2.right;
      }

      if (current2.left && !current.left) {
        current.left = current2.left;
      }
    }
  }
  console.log("______________________");
  return root1;
};

console.dir(mergeTrees(node1, node4), { depth: null });

//soluzione corretta
var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  const stack1 = [root1];
  const stack2 = [root2];

  root1.val += root2.val;

  while (stack1.length > 0 || stack2.length > 0) {
    const current1 = stack1.pop();
    const current2 = stack2.pop();

    if (current1 && current2) {
      if (current1.right || current2.right) {
        if (!current1.right) {
          current1.right = current2.right;
        } else if (current2.right) {
          stack1.push(current1.right);
          stack2.push(current2.right);
          current1.right.val += current2.right.val;
        }
      }

      if (current1.left || current2.left) {
        if (!current1.left) {
          current1.left = current2.left;
        } else if (current2.left) {
          stack1.push(current1.left);
          stack2.push(current2.left);
          current1.left.val += current2.left.val;
        }
      }
    }
  }
  return root1;
};
