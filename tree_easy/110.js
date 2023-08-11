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

// Costruzione del primo albero
let node1 = new TreeNode(3);
let node2 = new TreeNode(4);
let node3 = new TreeNode(5);
let node4 = new TreeNode(1);
let node5 = new TreeNode(2);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

// Costruzione del secondo albero (sottoalbero)
let subNode1 = new TreeNode(4);
let subNode2 = new TreeNode(1);
let subNode3 = new TreeNode(2);

subNode1.left = subNode2;
subNode1.right = subNode3;

//bilanciato
let balancedNode1 = new TreeNode(1);
let balancedNode2 = new TreeNode(2);
let balancedNode3 = new TreeNode(3);
let balancedNode4 = new TreeNode(4);
let balancedNode5 = new TreeNode(5);
let balancedNode6 = new TreeNode(6);
let balancedNode7 = new TreeNode(7);
let balancedNode8 = new TreeNode(8);
let balancedNode9 = new TreeNode(9);

balancedNode1.left = balancedNode2;
balancedNode1.right = balancedNode3;
balancedNode2.left = balancedNode4;
balancedNode2.right = balancedNode5;
balancedNode3.left = balancedNode6;
balancedNode3.right = balancedNode7;
balancedNode4.left = balancedNode8;
balancedNode4.right = balancedNode9;

//sbilanciato
let unbalancedLarge1 = new TreeNode(1);
let unbalancedLarge2 = new TreeNode(2);
let unbalancedLarge3 = new TreeNode(3);
let unbalancedLarge4 = new TreeNode(4);
let unbalancedLarge5 = new TreeNode(5);
let unbalancedLarge6 = new TreeNode(6);
let unbalancedLarge7 = new TreeNode(7);
let unbalancedLarge8 = new TreeNode(8);

unbalancedLarge1.right = unbalancedLarge2;
unbalancedLarge2.right = unbalancedLarge3;
unbalancedLarge3.right = unbalancedLarge4;
unbalancedLarge4.right = unbalancedLarge5;
unbalancedLarge5.right = unbalancedLarge6;
unbalancedLarge6.right = unbalancedLarge7;
unbalancedLarge7.right = unbalancedLarge8;

//sbilanciato 2
let unbalancedRightA = new TreeNode(10);
let unbalancedRightB = new TreeNode(20);
let unbalancedRightC = new TreeNode(30);
let unbalancedRightD = new TreeNode(40);
let unbalancedRightE = new TreeNode(50);
let unbalancedRightF = new TreeNode(60);
let unbalancedRightG = new TreeNode(70);
let unbalancedRightH = new TreeNode(80);
let unbalancedRightI = new TreeNode(90);
let unbalancedRightJ = new TreeNode(100);
let unbalancedRightK = new TreeNode(110);
let unbalancedRightL = new TreeNode(120);
let unbalancedRightM = new TreeNode(130);

unbalancedRightA.left = unbalancedRightB;
unbalancedRightA.right = unbalancedRightC;
unbalancedRightB.left = unbalancedRightD;
unbalancedRightB.right = unbalancedRightE;
unbalancedRightC.left = unbalancedRightF;
unbalancedRightC.right = unbalancedRightG;
unbalancedRightF.left = unbalancedRightH;
unbalancedRightG.right = unbalancedRightI;
unbalancedRightI.left = unbalancedRightJ;
unbalancedRightJ.right = unbalancedRightK;
unbalancedRightK.right = unbalancedRightL;
unbalancedRightL.right = unbalancedRightM;

//sbilanciato 3
let n0 = new TreeNode(1);
let n1 = new TreeNode(2);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(3);
let n7 = new TreeNode(4);
let n8 = new TreeNode(4);

n0.left = n1;
n0.right = n2;
n1.left = n3;
n1.right = n4;
n3.left = n7;
n3.right = n8;

var isBalanced = function (root) {
  var rec = function (root) {
    if (root === null) return true;
    let right = rec(root.right);
    if (right === -1) return -1;
    let left = rec(root.left);
    if (left === -1) return -1;
    if (right - left > 1 || right - left < -1) return -1;
    return Math.max(right, left) + 1;
  };
  return rec(root) != -1;
};

console.dir(isBalanced(node1), { depth: null });
console.log("-----------------------2--------------------------");
console.dir(isBalanced(subNode1), { depth: null });
console.log("-----------------------bilanciato--------------------------");
console.dir(isBalanced(balancedNode1), { depth: null });
console.log("-----------------------sbilanciato--------------------------");
console.dir(isBalanced(unbalancedLarge1), { depth: null });
console.log("-----------------------sbilanciato2--------------------------");
console.dir(isBalanced(unbalancedRightA), { depth: null });
console.log("-----------------------sbilanciato3--------------------------");
console.dir(isBalanced(n0), { depth: null });
