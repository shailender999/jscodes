/*
    Inorder traversal is a method for visiting all the nodes in a binary tree. 
    In this traversal, the nodes are visited in the following order:

        Visit the left subtree recursively ( i.e., call Inorder(left->subtree))
        Visit the current node.
        Visit the right subtree recursively ( i.e., call Inorder(right->subtree))

    In other words, for each node in the binary tree, the inorder traversal visits the left child first, 
    then the node itself, and finally the right child.

    Uses : In the case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. 
            To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal 
            is reversed can be used.
*/

function Node(value) {
    this.key = value;
    this.left = null;
    this.right = null;
}

function inOrderTraversal(root, output = []) {
    if (root === null) {
        return;
    } 
    inOrderTraversal(root.left, output);
    output.push(root.key);
    inOrderTraversal(root.right, output);
}

// Example 1

(() => {
    const root = new Node(1);
    root.right = new Node(3);
    root.left = new Node(2);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    const output = [];
    inOrderTraversal(root, output);
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
    inOrderTraversal(root, output);
    console.log(output);
})();

/*
    Time Complexity: O(N)
    Auxiliary Space: If we don’t consider the size of the stack for function calls then O(1) 
                        otherwise O(h) where h is the height of the tree. 
*/