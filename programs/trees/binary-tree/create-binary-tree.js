/*
    A binary tree is a tree data structure in which each node 
    can have at most two children, 
    which are referred to as the left child and the right child.
    
    The topmost node in a binary tree is called the root, 
    and the bottom-most nodes are called leaves.

    Implement the binary tree below with structure as below:
                1
              /   \
             2     3
            /
           4
*/

// Constructor function to create node having three properties
// key (store the value of node),
// left(reference of left child),
// right(reference of right child)

function Node(value) {
    this.key = value;
    this.left = null;
    this.right = null;
}

// create the root node of the tree

let root = new Node(1);

// Create the child node 2 and 3 and attach them to left and right of the root node

root.left = new Node(2);
root.right = new Node(3);

// Create the node 4 and attach it to left child of node 2

root.left.left = new Node(4)

