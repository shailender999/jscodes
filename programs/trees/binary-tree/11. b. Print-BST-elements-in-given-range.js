/*
    Print BST elements in given range
    [Easy, [Amazon, Flipkart, Microsoft]]

    Given a Binary Search Tree and a range [low, high]. Find all the numbers in the BST that lie in the given range.
Note: Element greater than or equal to root go to the right side.

Example 1:

Input:
       17
     /    \
    4     18
  /   \
 2     9 
l = 4, h = 24
Output: 4 9 17 18 
Example 2:

Input:
       16
     /    \
    7     20
  /   \
 1    10
l = 13, h = 23
Output: 16 20 

Your task is to complete the function printNearNodes() which takes the root Node of the BST and 
the range elements low and high as inputs and returns an array that contains the BST elements 
in the given range low to high (inclusive) in non-decreasing order.
*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function printNearNodes(root, low, high) {
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
  return output.filter((item) => item >= low && item <= high);
}

// Example 1
(() => {
  const root = new Node(17);
  root.left = new Node(4);
  root.right = new Node(18);
  root.left.left = new Node(2);
  root.left.right = new Node(9);
  const output = printNearNodes(root, 4, 24);
  console.log(output);
  // expected [4,9,17,18]
})();

// Example 2
(() => {
  const root = new Node(16);
  root.left = new Node(7);
  root.right = new Node(20);
  root.left.left = new Node(1);
  root.left.right = new Node(10);
  const output = printNearNodes(root, 13, 23);
  console.log(output);
  // expected [16,20]
})();
