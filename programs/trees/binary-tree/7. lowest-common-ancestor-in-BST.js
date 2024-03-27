/*
    Lowest Common Ancestor in a BST
    [Easy, [Flipkart, Accolite, Amazon, Microsoft, Samsung, MAQ Software, Synopsys]]

    Given a Binary Search Tree (with all values unique) and two node values n1 and n2 (n1!=n2). 
    Find the Lowest Common Ancestors of the two nodes in the BST.

Example 1:

Input:
              5
            /   \
          4      6
         /        \
        3          7
                    \
                     8
n1 = 7, n2 = 8
Output: 7
Example 2:

Input:
     2
   /   \
  1     3
n1 = 1, n2 = 3
Output: 2

Your task is to complete the function LCA() which takes the root Node of the BST and 
two integer values n1 and n2 as inputs and 
returns the Lowest Common Ancestor of the Nodes with values n1 and n2 in the given BST.
*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function LCA(root, n1, n2) {
  if (!root) {
    return null;
  }
  // if both nodes are smaller than current nodes, we will search in left subtree
  if (root.key > n1 && root.key > n2) {
    return LCA(root.left, n1, n2);
  }
  // if both nodes are greater than current node, we will search in right subtree
  else if (root.key < n1 && root.key < n2) {
    return LCA(root.right, n1, n2);
  }
  // if one node is less than current node and the other node is greater than current node
  // or one of them matches the current node, then current node is LCA.
  else {
    return root.key;
  }
}

// Example 1
(() => {
  const root = new Node(2);
  root.left = new Node(1);
  root.right = new Node(3);
  const output = LCA(root, 1, 3);
  console.log(output);
  // expected 2
})();

// Example 2
(() => {
  const root = new Node(5);
  root.left = new Node(4);
  root.left.left = new Node(3);
  root.right = new Node(6);
  root.right.right = new Node(7);
  root.right.right.right = new Node(8);
  const output = LCA(root, 7, 8);
  console.log(output);
  // expected 7
})();
