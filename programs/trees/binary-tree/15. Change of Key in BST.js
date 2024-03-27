/*
    Change of Key in BST
    [Easy]

    Given a Binary Search Tree ,change old key value present in the tree to the given new key value.
Example 1:

Input: Root of below tree
              50
           /     \
          30      70
         /  \    /  \
       20   40  60   80 
     Old key value:  40
     New key value:  10

Output: BST should be modified to following
              50
           /     \
          30      70
         /       /  \
       20      60   80  
       /
     10

The task is to complete the function changeKey() which takes root, oldVal and newVal as the input argument, 
and returns the root of tree after changing the old value with new value in BST. 


Logic:

Delete old key
Insert new key
*/

function Node(value) {
  this.key = value;
  this.left = null;
  this.right = null;
}

function inOrder(root, output) {
  if (root) {
    inOrder(root.left, output);
    output.push(root.key);
    inOrder(root.right, output);
  }
}

function deleteNode(root, key) {
  if (!root) {
    return root;
  }
  if (key < root.key) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      temp = root.left;
      return temp;
    } else if (!root.right) {
      temp = root.right;
      return temp;
    }
  }
}

function changeKey(root, oldValue, newvalue) {
  if (!root) {
    return null;
  }
  if (oldValue < root.key) {
    root.left = changeKey(root.left, oldValue, newvalue);
  } else if (oldValue > root.key) {
    root.right = changeKey(root.right, oldValue, newvalue);
  } else {
    root.key = newvalue;
  }
  return root;
}

// Example 1
(() => {
  const root = new Node(50);
  root.left = new Node(30);
  root.right = new Node(70);
  root.left.left = new Node(20);
  root.left.right = new Node(40);
  root.right.left = new Node(60);
  root.right.right = new Node(80);
  const input_tree = [];
  inOrder(root, input_tree);
  console.log("Input tree : ", input_tree);
  const output = changeKey(root, 40, 10);
  //const output = changeKey(root, 30, 40);
  const output_tree = [];
  inOrder(output, output_tree);
  console.log("Output tree : ", output_tree);
  // expected [1,2,3]
})();
