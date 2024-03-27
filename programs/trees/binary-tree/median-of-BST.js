/*
    Median of BST
    [Easy, [Amazon]]

    Given a Binary Search Tree of size N, find the Median of its Node values.

Example 1:

Input:
       6
     /   \
   3      8   
 /  \    /  \
1    4  7    9
Output: 6
Explanation: Inorder of Given BST will be:
1, 3, 4, 6, 7, 8, 9. So, here median will 6.

Example 2:

Input:
       6
     /   \
   3      8   
 /   \    /   
1    4   7   
Output: 5
Explanation:Inorder of Given BST will be:
1, 3, 4, 6, 7, 8. So, here median will
(4 + 6)/2 = 10/2 = 5.
 

Your task is to complete the function findMedian() which takes the root of the Binary Search Tree as input 
and returns the Median of Node values in the given BST.
Median of the BST is:

    If number of nodes are even: then median = (N/2 th node + (N/2)+1 th node)/2
    If number of nodes are odd : then median = (N+1)/2th node.

*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function findMedian(root) {
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
  if (output.length % 2 === 0) {
    let i = output.length / 2;
    return (output[i] + output[i - 1]) / 2;
  } else {
    return output[Math.floor(output.length / 2)];
  }
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
  const output = findMedian(root);
  console.log(output);
  // expected 12
})();

// Example 2
(() => {
  const root = new Node(2);
  root.left = new Node(1);
  root.right = new Node(3);
  const output = findMedian(root, 2);
  console.log(output);
  // expected 2
})();

// Example 3
(() => {
  const root = new Node(6);
  root.left = new Node(3);
  root.right = new Node(8);
  root.left.left = new Node(1);
  root.left.right = new Node(4);
  root.right.left = new Node(7);
  root.right.right = new Node(9);
  const output = findMedian(root);
  console.log(output);
  // expected 6
})();

// Example 4
(() => {
  const root = new Node(6);
  root.left = new Node(3);
  root.right = new Node(8);
  root.left.left = new Node(1);
  root.left.right = new Node(4);
  root.right.left = new Node(7);
  const output = findMedian(root);
  console.log(output);
  // expected 5
})();
