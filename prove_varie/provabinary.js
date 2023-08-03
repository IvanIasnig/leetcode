 function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
 }
         
  let node1 = new TreeNode(1);
  let node2 = new TreeNode(2);
  let node3 = new TreeNode(3);

  
  node1.left = node2;
  node1.right = node3;


  console.dir(node1, { depth: null });