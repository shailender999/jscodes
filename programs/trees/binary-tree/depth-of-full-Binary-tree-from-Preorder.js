/*
    Given preorder of a binary tree, calculate its depth(or height) [starting from depth 0]. 
    The preorder is given as a string with two possible characters. 

    ‘l’ denotes the leaf
    ‘n’ denotes internal node

    The given tree can be seen as a full binary tree where every node has 0 or two children. 
    The two children of a node can ‘n’ or ‘l’ or mix of both.

    Examples :  

    Input  : nlnll
    Output : 2

    Input  : nlnnlll
    Output : 3
*/


function findDepth(tree) {
    const size = tree.length;
    let index = 0;
    function findDepthRec(tree, index) {
        
    }
}

findDepth("nlnll".split(''));
findDepth("nlnnlll".split(''));


