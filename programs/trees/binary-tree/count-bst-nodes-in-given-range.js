/*
    Count BST nodes that lie in a given range
    [Easy, [D E Shaw, Google]]

    Given a Binary Search Tree (BST) and a range l-h(inclusive), count the number of nodes in the BST that lie in the given range.

The values smaller than root go to the left side
The values greater and equal to the root go to the right side
Example 1:

Input:
      10
     /  \
    5    50
   /    /  \
  1    40  100
l = 5, h = 45
Output: 3
Explanation: 5 10 40 are the node in the
range
Example 2:

Input:
     5
    /  \
   4    6
  /      \
 3        7
l = 2, h = 8
Output: 5
Explanation: All the nodes are in the
given range.

You are required to complete the function getCountOfNode() that takes root, l ,h as parameters and returns the count.


*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function getCountOfNode(root, low, high) {
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
  let count = 0;
  for (let item of output) {
    if (item >= low && item <= high) {
      count++;
    }
  }
  return count;
}

// Example 1
(() => {
  const root = new Node(10);
  root.left = new Node(5);
  root.right = new Node(50);
  root.left.left = new Node(1);
  root.right.left = new Node(40);
  root.right.right = new Node(100);
  const output = getCountOfNode(root, 5, 45);
  console.log(output);
  // expected 3
})();

// Example 2
(() => {
  const root = new Node(5);
  root.left = new Node(4);
  root.right = new Node(6);
  root.left.left = new Node(3);
  root.right.right = new Node(7);
  const output = getCountOfNode(root, 2, 8);
  console.log(output);
  // expected 5
})();
