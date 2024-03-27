/*
    Level order traversal, also known as breadth-first traversal, involves visiting all the nodes 
    of a binary tree level by level, from left to right. 
    
    We can use a queue to keep track of the nodes at each level as we traverse the tree.

          2
       /    \
     7       1
   /        
 10       

 For above example traversal output will be
 2 7 1 10
*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function levelOrderTraversalNaiveMethod(root) {
  // calculate the height of the tree
  function height(root) {
    if (!root) {
      return 0;
    } else {
      let lheight = height(root.left);
      let rheight = height(root.right);
      return Math.max(lheight, rheight) + 1;
    }
  }
  function printCurrentLevel(root, level) {
    if (!root) {
      return null;
    }
    if (level === 1) {
      console.log(root.key);
    } else {
      printCurrentLevel(root.left, level - 1);
      printCurrentLevel(root.right, level - 1);
    }
  }
  let h = height(root);
  let i;
  for (i = 1; i <= h; i++) {
    printCurrentLevel(root, i);
  }
}

function levelOrderTraversalQueueMethod(root) {
  const output = [];
  const queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let tempNode = queue.shift();
    output.push(tempNode.key);
    if (tempNode.left != null) {
      queue.push(tempNode.left);
    }
    if (tempNode.right != null) {
      queue.push(tempNode.right);
    }
  }
  return output;
}
// Example 1
(() => {
  const root = new Node(2);
  root.left = new Node(7);
  root.right = new Node(1);
  root.left.left = new Node(10);
  levelOrderTraversalNaiveMethod(root);
  console.log(levelOrderTraversalQueueMethod(root));
})();
