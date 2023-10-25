function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node4 = new TreeNode(4);
const node2_3 = new TreeNode(2);
const node3 = new TreeNode(3, node2_3, node4);
const node2_2 = new TreeNode(2);
const node2_1 = new TreeNode(2, node2_2);
const root = new TreeNode(1, node2_1, node3);

const leftNode = new TreeNode(1);
const rightNode = new TreeNode(1);
const root2 = new TreeNode(1, leftNode, rightNode);

//console.dir(root, { depth: null });

var removeLeafNodes = function (root, target) {
  let res = root;

  let rec = (root) => {
    if (root === null) return;

    rec(root.right);
    rec(root.left);

    if (
      root.left &&
      root.left.val === target &&
      !root.left.right &&
      !root.left.left
    ) {
      root.left = null;
    }

    if (
      root.right &&
      root.right.val === target &&
      !root.right.right &&
      !root.right.left
    ) {
      root.right = null;
    }
  };

  rec(root);
  if (res.val === target && !res.right && !res.left) return null;
  return res;
};

console.dir(removeLeafNodes(root, 2), { depth: null });
console.dir("-------------", { depth: null });
console.dir(removeLeafNodes(root2, 1), { depth: null });

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("il mio endpoint", { name, password });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
