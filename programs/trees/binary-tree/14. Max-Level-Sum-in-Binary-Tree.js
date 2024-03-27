/*
    Max Level Sum in Binary Tree
    [Easy, [Amazon]]

    Given a Binary Tree having positive and negative nodes. 
    Find the maximum sum of a level in the given Binary Tree.

Example 1:

Input :               
             4
          /    \
         2     -5
        / \    / \
      -1   3  -2  6

Output: 6

Explanation :
Sum of all nodes of 0'th level is 4
Sum of all nodes of 1'th level is -3
Sum of all nodes of 2'th level is 6
Hence maximum sum is 6

Example 2:

Input :          
            1
          /   \
         2     3
        / \     \
       4   5     8
                / \
               6   7  

Output :  17

Explanation: Maximum sum is at level 2.

Complete the function maxLevelSum() which takes root node as input parameter and returns the maximum 
sum of any horizontal level in the given Binary Tree.
*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function maxLevelSum(root) {
  if (!root) {
    return 0;
  }
  let max_sum = -Infinity;
  const queue = [root];
  while (queue.length > 0) {
    let level_sum = 0;
    let level_height = queue.length;
    for (let i = 0; i < level_height; i++) {
      let node = queue.shift();
      level_sum += node.key;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    max_sum = Math.max(max_sum, level_sum);
  }
  return max_sum;
}

// Example 1
(() => {
  const root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(-5);
  root.left.left = new Node(-1);
  root.left.right = new Node(3);
  root.right.left = new Node(-2);
  root.right.right = new Node(6);

  const output = maxLevelSum(root);
  console.log("Example 1 : ", output);
  // expected 6
})();

// Example 2
(() => {
  const root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.right = new Node(8);
  root.right.right.left = new Node(6);
  root.right.right.right = new Node(7);
  const output = maxLevelSum(root);
  console.log("Example 2 : ", output);
  // expected 17
})();
