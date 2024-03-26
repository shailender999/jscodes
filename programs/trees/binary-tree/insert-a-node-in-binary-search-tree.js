/*
    Insert a node in a BST 
    [Easy, [Paytm, Accolite, Amazon, Microsoft, Samsung]]

    Given a BST and a key K. If K is not present in the BST, Insert a new Node with a value equal to K into the BST. If K is already present in the BST, don't modify the BST.

Example 1:

Input:
     2
   /   \   
  1     3
K = 4
Output: 
1 2 3 4
Explanation: 
After inserting the node 4
Inorder traversal will be 1 2 3 4.
Example 2:

Input:
        2
      /   \
     1     3
             \
              6
K = 4
Output: 
1 2 3 4 6
Explanation: 
After inserting the node 4
Inorder traversal of the above tree will be 1 2 3 4 6.


Your task is to complete the function insert() which takes the root of the BST and Key K as input parameters 
and returns the root of the modified BST after inserting K. 

Note: The generated output contains the inorder traversal of the modified tree.
*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function insert(node, data) {
  // recursive function for inserting data in the tree
  function insert_rec(node, data) {
    // if the tree is empty, the new node becomes the root
    if (!node) {
      return new Node(data);
    }
    // if value of new node is less than value of current node, move to left subtree
    if (data < node.key) {
      node.left = insert_rec(node.left, data);
    }
    // if value of new node is greater than value of current node, move to right subtree
    else if (data > node.key) {
      node.right = insert_rec(node.right, data);
    }
    // If the value of the new node is equal to the value of the current node, do nothing
    // (i.e., the node already exists in the tree)
    return node;
  }
  // call the insert_rec method
  insert_rec(node, data);
  function inOrder(node, output) {
    if (node) {
      inOrder(node.left, output);
      output.push(node.key);
      inOrder(node.right, output);
    }
  }
  const inOrder_nodes = [];
  inOrder(node, inOrder_nodes);
  return inOrder_nodes;
}

// Example 1
(() => {
  const root = new Node(2);
  root.left = new Node(1);
  root.right = new Node(3);
  root.right.right = new Node(6);
  const output = insert(root, 4);
  console.log(output);
  // expected [1,2,3,4,6]
})();

// Example 2
(() => {
  const root = new Node(2);
  root.right = new Node(3);
  root.left = new Node(1);
  const output = insert(root, 4);
  console.log(output);
  // expected [1,2,3,4]
})();
