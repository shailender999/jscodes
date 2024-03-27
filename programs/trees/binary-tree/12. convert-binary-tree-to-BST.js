/*
    Binary Tree to BST
    [Easy, [Amazon, Adobe]]
    Given a Binary Tree, convert it to Binary Search Tree in such a way that keeps the 
    original structure of Binary Tree intact.
 Example 1:

Input:
      1
    /   \
   2     3
Output: 
1 2 3
Explanation:
The converted BST will be 
      2
    /   \
   1     3

Example 2:

Input:
          1
       /    \
     2       3
   /        
 4       
Output: 
1 2 3 4
Explanation:
The converted BST will be

        3
      /   \
    2     4
  /
 1

Your task is to complete the function binaryTreeToBST() which takes the root of the Binary tree as input and 
returns the root of the BST.
*/
function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function inOrder(root, output) {
  if (root) {
    inOrder(root.left, output);
    output.push(root.key);
    inOrder(root.right, output);
  }
}

function binaryTreeToBST(root) {
  const output = [];
  // calcualte inorder traversal of BST, it will give us the nodes in a sorted ascending order list.
  inOrder(root, output);
  output.sort((a, b) => a - b);
  function inOrderAssignValues(node, sorted_nodes) {
    if (node) {
      inOrderAssignValues(node.left, sorted_nodes);
      node.key = sorted_nodes[index.inde++];
      //index++;
      inOrderAssignValues(node.right, sorted_nodes);
    }
  }
  let index = { inde: 0 };
  //console.log(output[index.inde++]);
  inOrderAssignValues(root, output);
  //console.log(output);
  return root;
}

// Example 1
(() => {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  const input_tree = [];
  inOrder(root, input_tree);
  console.log("Input tree : ", input_tree);
  const output = binaryTreeToBST(root);
  const output_tree = [];
  inOrder(output, output_tree);
  console.log("Output tree : ", output_tree);
  // expected [1,2,3]
})();

// Example 2
(() => {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  const input_tree = [];
  inOrder(root, input_tree);
  console.log("Input tree : ", input_tree);
  const output = binaryTreeToBST(root);
  const output_tree = [];
  inOrder(output, output_tree);
  console.log("Output tree : ", output_tree);
  // expected [1,2,3,4]
})();
