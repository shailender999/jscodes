/*
    Kth largest element in BST
    [Easy, [Accolite, Amazon, Microsoft, Samsung, SAP Labs]]

    Given a Binary Search Tree. Your task is to complete the function which will return the Kth largest element without doing any modification in Binary Search Tree.

Example 1:

Input:
      4
    /   \
   2     9
k = 2 
Output: 4
Example 2:

Input:
       9
        \ 
          10
K = 1
Output: 10

Your task is to complete the function kthLargest() which takes the root of the BST and 
an integer K as inputs and returns the Kth largest element in the given BST.
*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function kthLargest(root, k) {
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
  return output[output.length - k];
}

// Example 1
(() => {
  const root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(9);
  const output = kthLargest(root, 2);
  console.log(output);
  // expected 4
})();

// Example 2
(() => {
  const root = new Node(9);
  root.right = new Node(10);
  const output = kthLargest(root, 1);
  console.log(output);
  // expected 10
})();
