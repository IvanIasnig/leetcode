class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));

/* la soluzione commentata è una soluzione carina che avevo trovato interpretando male il problema
ritorna un albero  */

var postorderTraversal = function (root) {
  let res = [];

  var rec = function (root) {
    if (root === null) return;

    rec(root.left);

    rec(root.right);
    res.push(root.val);
  };
  rec(root);
  return res;
};

// var postorderTraversal = function (root) {
//     let res = new TreeNode();
//     let temp = res;
//     let c = 0;

//     var rec = function (root) {
//       if (root === null) return;

//       rec(root.right);

//       rec(root.left);

//       if (c % 2 === 0) {
//         temp.right = new TreeNode(root.val);
//         temp = temp.right
//       }
//       if (c % 2 === 1) {
//         temp.left = new TreeNode(root.val);
//         temp = temp.left
//       }

//       c++;
//     };
//     rec(root);
//     return res.right;
//   };
console.dir(postorderTraversal(root), { depth: null });
