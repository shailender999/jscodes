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

// method to find the minimum value inside the tree
function minValueNode(Node) {
  let current = Node;
  // as we need to find minimum, it will be the left most child of the tree
  // so, we iterate till that node and return that node.
  while(!current.left) {
    current = current.left;
  }
  return current;
}

function deleteNode(root, key) {
  // if(root is null, return that root only;)
  if (!root) {
    return root;
  }
  // find the tree node which has the key
  // if key is less than current root value, then the key would definitely lie in the left subtree
  if (key < root.key) {
    // replace the left subtree of current root with node returned from deleted node method.
    // call deleteNode again to delete node from that left subtree of current root.
    root.left = deleteNode(root.left, key);
  } 
  // if key is greater than current root value, then the key would definitely lie in the right subtree
  else if (key > root.key) {
    // replace the right subtree of current root with node returned from deleted node method.
    // call deleteNode again to delete node from that right subtree of current root.
    root.right = deleteNode(root.right, key);
  } 
  // if the key is same as root's value, then this is the node that needs to be deleted
  else {
    // check if node has only one child or no child
    if (!root.left) {
      // if left child is not present, then we need to return the right child node;
      return root.right;
    } else if (!root.right) {
      // if right child is not present, then we need to return the left child node;
      return root.left;
    }

    // node with two children: Get the inorder successor (smallest in the right subtree)
    let temp = minValueNode(root.right);
    // replace current root value (this is the node which is to be deleted) with the smallest node from the right subtree.
    root.key = temp.key;
    // Now, delete that node from right subtree as we have already moved it to some other place.
    root.right = deleteNode(root.right, temp.key);
  }
  return root;
}

function insertNode(root, key) {
    // if root node is null, we return the new Node to be created with given key value
    if(!root) { return new Node(key) };
    // if key is less than current root value, then the key needs to be inserted in left subtree
    if(key < root.key) {
      root.left = insertNode(root.left, key);
    }
    // if key is greater than current root value, then the key needs to be inserted in right subtree
    else {
      root.right = insertNode(root.right, key);
    }
    return root;
}

function changeKey(root, oldValue, newValue) {
  // base case, if root is null return null as there is no tree.
  if (!root) {
    return null;
  }
  // delete the old Value from the tree
  root = deleteNode(root, oldValue);
  // insert the new Value in the tree
  root = insertNode(root, newValue);
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
