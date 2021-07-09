import React, { useState, useRef, useEffect } from 'react';
import './BinarySearchTree.scss';
import BinaryTreeDisplay from '../BinaryTree/BinaryTreeDisplay.js';

//class for node in binary tree
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//class for binary search tree
class BinarySearchTreeClass {
    constructor(){
        this.root = null;
    }

    insert(value) {
        var current = this.root;
        var parent = null;
        while (current != null) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else
                return;
        }
        if (parent === null)
            this.root = new BinaryTreeNode(value);
        else if (value < parent.value)
            parent.left = new BinaryTreeNode(value);
        else
            parent.right = new BinaryTreeNode(value);
    }

    remove(value) {
        var current = this.root;
        var parent = null;
        //find a node equal to value else exit function
        while (true) {
            if (current === null)
                return;
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else
                break;
        }
        //if node has no children set parent child to null
        if (current.left === null && current.right === null) {
            if (parent === null)
                this.root = null;
            else if (value < parent.value)
                parent.left = null;
            else
                parent.right = null;
        }
        //if node has 1 child set parent child to current child
        else if (current.right === null) {
            if (parent === null)
                this.root = current.left;
            else if (value < parent.value)
                parent.left = current.left;
            else
                parent.right = current.left;
        }
        else if (current.left === null) {
            if (parent === null)
                this.root = current.right;
            else if (value < parent.value)
                parent.left = current.right;
            else
                parent.right = current.right;
        }
        //if node has 2 children set parent child to leftmost node of right subtree of current, and delete that
        else {
            //find the leftmost child of right subtree of current, set current to that value
            var leftmostChild = current.right;
            parent = current;
            while (leftmostChild.left !== null) {
                parent = leftmostChild;
                leftmostChild = leftmostChild.left;
            }
            current.value = leftmostChild.value;
            //delete the leftmost child of right subtree
            current = leftmostChild;
            if (current.left === null && current.right === null) {
                if (current.value < parent.value)
                    parent.left = null;
                else
                    parent.right = null;
            }
            else if (current.right === null) {
                if (current.value < parent.value)
                    parent.left = current.left;
                else
                    parent.right = current.left;
            }
            else {
                if (current.value < parent.value)
                    parent.left = current.right;
                else
                    parent.right = current.right;
            }
        }
    }

    find (value) {

    }
}

//react component for binary search tree
const BinarySearchTree = () => {

    const [, forceRender] = useState(0);
    const [tree, ] = useState(new BinarySearchTreeClass());
    const insertInput = useRef();
    const removeInput = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //function to generate a random BST
    const randomTree = () => {

    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize the tree to a random BST
    useEffect(randomTree, []);

    //function to insert into the binary search tree on button click
    const insert = () => {
        var data = parseInt(insertInput.current.value);
        if(isNaN(data))
            data = randInt(-999,1000);
        tree.insert(data);
        forceUpdate();
        insertInput.current.value = null;
    }

    //function to remove from binary search tree on button click
    const remove = () => {
        if(tree.root !== null) {
            var data = parseInt(removeInput.current.value);
            if(isNaN(data))
                data = tree.root.value;
            tree.remove(data);
            forceUpdate();
        }
        removeInput.current.value = null;
    }

    return (
        <div className="binary-search-tree">
            <div className="controls">
                <button id="randomButton">Random</button>
                <br />
                <button id="insertButton" onClick={insert}>Insert</button>
                <input ref={insertInput} type="text"></input>
                <br />
                <button id="removeButton" onClick={remove}>Remove</button>
                <input ref={removeInput} type="text"></input>
            </div>
            <div className="visualization">
                <BinaryTreeDisplay tree={tree} />
            </div>
        </div>
    );

}

export default BinarySearchTree;