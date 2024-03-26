/*
    Preorder traversal is a method for visiting all the nodes in a binary tree. 
    In this traversal, the nodes are visited in the following order:

        Visit the current node.
        Visit the left subtree recursively.
        Visit the right subtree recursively.
    
    In other words, for each node in the binary tree, the preorder traversal visits the node itself 
    before visiting its children.

    Uses: Preorder traversal is used to create a copy of the tree.
*/

function Node(value) {
    this.key = value;
    this.left = null;
    this.right = null;
}

function preOrderTraversal(root, output = []) {
    if (root === null) {
        return;
    }
    output.push(root.key);
    preOrderTraversal(root.left, output); 
    preOrderTraversal(root.right, output);
}

// Example 1

(() => {
    const root = new Node(1);
    root.right = new Node(3);
    root.left = new Node(2);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    const output = [];
    preOrderTraversal(root, output);
    console.log(output);
})();

// Example 2
(() => {
    const root = new Node(1);
    root.right = new Node(3);
    root.left = new Node(2);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);
    const output = [];
    preOrderTraversal(root, output);
    console.log(output);
})();

/*
    Time Complexity: O(N)
    Auxiliary Space: If we don’t consider the size of the stack for function calls then O(1) 
                        otherwise O(h) where h is the height of the tree. 
*/