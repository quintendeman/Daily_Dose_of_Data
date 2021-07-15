import React from 'react';

const BinaryTreeInformation = () => {
    return (
        <div className="information">
            <h1>Binary Tree</h1>
            <p>A Binary Tree is a data structure in which each element in the tree contains at most two children elements, a left and a right child. Each element in the tree is contained in a node. A node contains the value of an element, a pointer to the left child node, and a pointer to the right child node. If a node does not have a left or right child it typically has a null pointer.</p>
            <br />
            <p><u>Binary Trees are used to implement several other data structures:</u></p>
            <ul>
                <li><b>Binary Search Tree:</b> elements are kept in an ordered pattern to allow for fast searching</li>
                <li><b>AVL Tree:</b> after insertion or deletion the tree balances itself to keep a minimal height</li>
                <li><b>Binary Heap:</b> elements are kept in an ordered pattern to keep extrema at the root</li>
            </ul>
        </div>
    );
}

export default BinaryTreeInformation;