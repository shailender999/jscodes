/*
    Inorder Successor in BST
    [Easy, [Morgan Stanley, Amazon, Microsoft]]

    Given a BST, and a reference to a Node x in the BST. Find the Inorder Successor of the given node in the BST.
 

Example 1:

Input:
      2
    /   \
   1     3
K(data of x) = 2
Output: 3 
Explanation: 
Inorder traversal : 1 2 3 
Hence, inorder successor of 2 is 3.

Example 2:

Input:
             20
            /   \
           8     22
          / \
         4   12
            /  \
           10   14
K(data of x) = 8
Output: 10
Explanation:
Inorder traversal: 4 8 10 12 14 20 22
Hence, successor of 8 is 10.
 

Your task is to complete the function inOrderSuccessor(). 
This function takes the root node and the reference node as argument and returns the node that is 
inOrder successor of the reference node. If there is no successor, return null value.


*/
function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function inOrderSuccessor(root, k) {
  function inOrder(root, output) {
    if (root) {
      inOrder(root.left, output);
      output.push(root.key);
      inOrder(root.right, output);
    }
  }
  const output = [];
  // calcualte inorder traversal of BST, it will give us the nodes in a sorted ascending order list.
  inOrder(root, output);
  for (let i = 0; i < output.length; i++) {
    if (output[i] === k && i + 1 < output.length) {
      return output[i + 1];
    }
  }
  return null;
}

// Example 1
(() => {
  const root = new Node(20);
  root.left = new Node(8);
  root.right = new Node(22);
  root.left.left = new Node(4);
  root.left.right = new Node(12);
  root.left.right.left = new Node(10);
  root.left.right.right = new Node(14);
  const output = inOrderSuccessor(root, 8);
  console.log(output);
  // expected 10
})();

// Example 2
(() => {
  const root = new Node(2);
  root.left = new Node(1);
  root.right = new Node(3);
  const output = inOrderSuccessor(root, 2);
  console.log(output);
  // expected 3
})();
