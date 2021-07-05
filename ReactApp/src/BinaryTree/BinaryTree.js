import React, { useState } from 'react';
import './BinaryTree.scss';
import Element from '../Element/Element';

//class for node in binary tree
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//class for binary tree data structure
class BinaryTreeClass {
    constructor(root) {
        this.root = root;
    }
}

//react component for a single level in a binary tree
const BinaryTreeLevel = (props) => {
    return props.list.map((node, index) => {
        if (node === null)
            return <Element key={index} value={""} />;
        else
            return <Element key={index} value={node.value} />;
    });
}

//react component to display the tree
const BinaryTreeDisplay = (props) => {
    var levelComponents = [];
    var nextQueue = [props.tree.root];
    var currQueue = [];
    while (true) {
        //break loop if entire level is null
        var allNull = true;
        for (let i = 0; i < nextQueue.length; i++) {
            if (nextQueue[i] !== null) {
                allNull = false;
            }
        }
        if (allNull) {
            break;
        }
        //continue breadth-first traversal creating BinaryTreeLevel component every iteration
        currQueue = nextQueue;
        nextQueue = [];
        for (let i = 0; i < currQueue.length; i++) {
            //use null as placeholder empty nodes in a level
            if (currQueue[i] === null) {
                nextQueue.push(null);
                nextQueue.push(null);
            } else {
                nextQueue.push(currQueue[i].left);
                nextQueue.push(currQueue[i].right);
            }
            console.log(currQueue);
        }
        levelComponents.push(
            <div className="binary-tree-level">
                <BinaryTreeLevel key={levelComponents.length} list={currQueue} />
            </div>
        );
    }

    return levelComponents;
}

var exampleTree = new BinaryTreeClass(new BinaryTreeNode(10));
exampleTree.root.left = new BinaryTreeNode(7);
exampleTree.root.right = new BinaryTreeNode(-3);
exampleTree.root.left.left = new BinaryTreeNode(13);
exampleTree.root.left.right = new BinaryTreeNode(27);
exampleTree.root.right.left = new BinaryTreeNode(-42);
exampleTree.root.right.right = new BinaryTreeNode(0);
exampleTree.root.right.left.right = new BinaryTreeNode(18);

//main react component for binary tree
const BinaryTree = () => {

    const [tree, ] = useState(exampleTree);
    const [, forceRender] = useState(0);

    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    return (
        <div className="binary-tree">
            <div className="controls">
                <button></button>
            </div>
            <div className="visualization">
                <BinaryTreeDisplay tree={tree} />
            </div>
        </div>
    );

}

export default BinaryTree;