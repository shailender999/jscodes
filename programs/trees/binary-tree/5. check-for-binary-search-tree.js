/*
    Given the root of a binary tree. Check whether it is a BST or not.
    [Easy, [VMWare, Flipkart, Accolite, Amazon, Microsoft (total 20+)]]

Note: We are considering that BSTs can not contain duplicate Nodes.
A BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

Input:
   2
 /    \
1      3
Output: 1 
Explanation: 
The left subtree of root node contains node
with key lesser than the root nodes key and 
the right subtree of root node contains node 
with key greater than the root nodes key.
Hence, the tree is a BST.
Example 2:

Input:
  2
   \
    7
     \
      6
       \
        5
         \
          9
           \
            2
             \
              6
Output: 0 
Explanation: 
Since the node with value 7 has right subtree 
nodes with keys less than 7, this is not a BST.
*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function isBST(node) {
  // to check if tree is binary search tree or not, we perform an inorder traversal to get the sorted
  // list of node values
  function inOrderTraversal(root, output = []) {
    if (root) {
      inOrderTraversal(root.left, output);
      output.push(root.key);
      inOrderTraversal(root.right, output);
    }
  }
  const inorder_nodes = [];
  inOrderTraversal(node, inorder_nodes);
  console.log(inorder_nodes);
  for (let i = 0; i < inorder_nodes.length - 1; i++) {
    // check if next node is smaller than or equal to previous node, then it means it is not a valid BST.
    // For a BST, next node should always be greater than previous node.
    if (inorder_nodes[i] >= inorder_nodes[i + 1]) {
      return false;
    }
  }
  return true;
}

// Example 1
(() => {
  const root = new Node(2);
  root.right = new Node(7);
  root.right.right = new Node(6);
  root.right.right.right = new Node(5);
  root.right.right.right.right = new Node(9);
  root.right.right.right.right.right = new Node(2);
  root.right.right.right.right.right.right = new Node(6);
  const output = isBST(root);
  console.log(output);
})();

// Example 2
(() => {
  const root = new Node(2);
  root.right = new Node(3);
  root.left = new Node(1);
  const output = isBST(root);
  console.log(output);
})();
