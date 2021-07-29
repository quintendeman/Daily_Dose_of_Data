import React, { useState, useRef, useEffect, useCallback } from 'react';
import './AvlTree.scss';
import BinaryTreeDisplay from '../BinaryTree/BinaryTreeDisplay.js';
import Element from '../Element/Element.js';

//class for node in binary tree
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

function getHeight(node) {
    if (node !== null) {
        if (getHeight(node.left) > getHeight(node.right)) {
            return 1 + getHeight(node.left);
        }
        else return 1 + getHeight(node.right);
    }
    else return 0;
}

function getBalance(node) {
    if (node !== null) {
        return getHeight(node.right) - getHeight(node.left);
    }
} 

function rotateRight(node, tree) {
    var newRoot = node.left;
    if (node === tree.root) tree.root = newRoot;
    var T2 = newRoot.right;

    newRoot.right = node;
    node.left = T2;
    
    
    //tree.root = newRoot;
}

function rotateLeft(node, tree) {
    var newRoot = node.right;
    if (node === tree.root) tree.root = newRoot;
    var T2 = newRoot.left;
    newRoot.left = node;
    node.right = T2;
}

//class for binary search tree
class AvlTreeClass {
    constructor() {
        this.root = null;
        this.height = 0;
    }

    insert(value) {
        var current = this.root;
        var parent = null;
        var height = 1;
        while (current != null) {
            if (value < current.value) {
                parent = current;
                current = current.left;
                height++;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
                height++;
            } else
                return;
        }
        if (parent === null)
            this.root = new BinaryTreeNode(value);
        else if (value < parent.value)
            parent.left = new BinaryTreeNode(value);
        else
            parent.right = new BinaryTreeNode(value);
        if (height > this.height)
            this.height = height;
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

    treeHeight() {
        return getHeight(this.root);
    }

}

//react component for binary search tree
const AvlTree = () => {

    const [, forceRender] = useState(0);
    const [tree, setTree] = useState(new AvlTreeClass());
    const secondRot = useRef(false);
    const familyLine = useRef([]);
    const insertInput = useRef();
    const removeInput = useRef();
    const findInput = useRef();
    const speedSlider = useRef();
    const focus = useRef();
    const green = useRef();
    const pink = useRef();
    const yellow = useRef();
    const interval = useRef();
    const animating = useRef();
    const animationFunction = useRef();
    const animationValue = useRef();

    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    //function to generate a random BST
    const randomTree = () => {
        if (animating.current)
            toggleAnimation();
        const height = randInt(2, 6);
        var newTree = new AvlTreeClass();
        var insertValue = null;
        while (newTree.height <= height) {
            insertValue = randInt(-999, 1000);
            newTree.insert(insertValue);
        }
        
        newTree.remove(insertValue);
        setTree(newTree);
        //toggleAnimation();
        //animationFunction.current = rotateStep;
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //function to pause or continue animation
    const toggleAnimation = useCallback(() => {
        
        if (animating.current) {
            clearInterval(interval.current);
            animating.current = false;
            focus.current = null;
            animationFunction.current = null;
            animationValue.current = null;
        } else {
            interval.current = setInterval(() => {
                animationFunction.current();
                forceUpdate();
            }, 1000 - speedSlider.current.value);
            green.current = null;
            yellow.current = null;
            animating.current = true;
        }
    }, []);

    //initialize the tree to a random BST
    useEffect(randomTree, [toggleAnimation]);

    //function to insert into the binary search tree on button click
    const insert = () => {
        if (animating.current)
            toggleAnimation();
        var data = parseInt(insertInput.current.value);
        if (isNaN(data))
            data = randInt(-999, 1000);
        insertInput.current.value = null;
        if (tree.root === null) {
            tree.insert(data);
            green.current = tree.root;
            forceUpdate();
        } else {
            focus.current = tree.root;
            forceUpdate();
            animationFunction.current = insertStep;
            animationValue.current = data;
            toggleAnimation();
        }
        familyLine.current = [];
    }

    //function to do a single step of insertion animation
    const insertStep = () => {
        
        if (animationValue.current < focus.current.value) {
            familyLine.current.push(focus.current);
            if (focus.current.left === null) {
                tree.insert(animationValue.current);
                //familyLine.current.push(focus.current);
                green.current = focus.current.left;
                //toggleAnimation();
                //animationFunction.current = rotateStep();
                focus.current = focus.current.left;
            } else
                focus.current = focus.current.left;
            
        } else if (animationValue.current > focus.current.value) {
            familyLine.current.push(focus.current);
            if (focus.current.right === null) {
                tree.insert(animationValue.current);
                //familyLine.current.push(focus.current);
                green.current = focus.current.right;
                focus.current = focus.current.right;
                //toggleAnimation();
                //animationFunction.current = rotateStep();
            } else
                focus.current = focus.current.right;
            
        } else {
            animationFunction.current = rotateStep;
        }
        //console.log(familyLine.current);
    }

    //function to remove from binary search tree on button click
    const remove = () => {
        if (animating.current)
            toggleAnimation();
        if (tree.root !== null) {
            var data = parseInt(removeInput.current.value);
            if (isNaN(data))
                data = tree.root.value;
            focus.current = tree.root;
            if (focus.current.value === data)
                pink.current = focus.current;
            forceUpdate();
            animationFunction.current = removeStep;
            animationValue.current = data;
            toggleAnimation();
        }
        removeInput.current.value = null;
        familyLine.current = [];
    }

    //function to do a single step of remove animation
    const removeStep = () => {
        
        if (animationValue.current < focus.current.value) {
            familyLine.current.push(focus.current);
            if (focus.current.left === null)
                toggleAnimation();
            else {
                focus.current = focus.current.left;
                if (focus.current.value === animationValue.current)
                    pink.current = focus.current;
            }
        } else if (animationValue.current > focus.current.value) {
            familyLine.current.push(focus.current);
            if (focus.current.right === null)
                toggleAnimation();
            else {
                focus.current = focus.current.right;
                if (focus.current.value === animationValue.current)
                    pink.current = focus.current;
            }
        } else {
            tree.remove(animationValue.current);
            pink.current = null;
            animationFunction.current = rotateStep;
        }
    }

    //function to start find animation
    const find = () => {
        if (animating.current)
            familyLine.current = [];
            toggleAnimation();
        if (tree.root !== null) {
            var data = parseInt(findInput.current.value);
            if (isNaN(data))
                data = tree.root.value;
            focus.current = tree.root;
            animationFunction.current = findStep;
            animationValue.current = data;
            toggleAnimation();
            if (focus.current.value === data)
                yellow.current = focus.current;
            forceUpdate();
        }
        findInput.current.value = null;
    }

    //function to to a single step of find animation
    const findStep = () => {
        if (animationValue.current < focus.current.value) {
            if (focus.current.left === null)
                toggleAnimation();
            else {
                focus.current = focus.current.left;
                if (focus.current.value === animationValue.current)
                    yellow.current = focus.current;
            }
        } else if (animationValue.current > focus.current.value) {
            if (focus.current.right === null)
                toggleAnimation();
            else {
                focus.current = focus.current.right;
                if (focus.current.value === animationValue.current)
                    yellow.current = focus.current;
            }
        } else {
            toggleAnimation();
        }
    }

    const rotateStep = () => {
        console.log(familyLine.current);
        //create new array copy of family line
        var family = [];
        for (var i = 0; i < familyLine.current.length; i++) {
            family.push(familyLine.current[i]);
        }
        

        //var inserted = green.current;
        //rotateRight(tree.root, tree);
        //rotateLeft(tree.root, tree);
        //var family = familyLine.current;
        
        var firstUnbalanced = family.pop();
        //console.log(getBalance(firstUnbalanced));
        //var child;
        
        while (Math.abs(getBalance(firstUnbalanced)) < 2 && family.length > 0) {
            firstUnbalanced = family.pop();
            
        }
        

        if (Math.abs(getBalance(firstUnbalanced)) < 2) {
            //tree is balanced 
            console.log("tree is balanced");
            toggleAnimation();
            
        }
        


        
            
        //Left Left case
        if (getBalance(firstUnbalanced) === -2 && getBalance(firstUnbalanced.left) === -1) {


            let l = firstUnbalanced.left;
            rotateRight(firstUnbalanced, tree);

            //insert on correct side
            let grandP = family.pop();
            if (grandP) {
                if (grandP.value < firstUnbalanced.value) {
                    grandP.right = l;
                }
                else grandP.left = l;
            } else tree.root = l;
            secondRot.current = true;
            familyLine.current.splice(familyLine.current.indexOf(l.right), 1);
            
            
        }


        //Left Right case
        if (getBalance(firstUnbalanced) === -2 && getBalance(firstUnbalanced.left) === 1) {
            let r = firstUnbalanced.left.right;
            rotateLeft(firstUnbalanced.left, tree);
            firstUnbalanced.left = r;
        }

        //Right Right case
        if (getBalance(firstUnbalanced) === 2 && getBalance(firstUnbalanced.right) === 1) {
            let r = firstUnbalanced.right;
            rotateLeft(firstUnbalanced, tree);
            //insert on correct side
            let grandP = family.pop();
            if (grandP) {
                if (grandP.value < firstUnbalanced.value) {
                    grandP.right = r;
                }
                else grandP.left = r;
            } else tree.root = r;
            familyLine.current.splice(familyLine.current.indexOf(firstUnbalanced), 1);
            
        }

        //Right Left Case
        if (getBalance(firstUnbalanced) === 2 && getBalance(firstUnbalanced.right) === -1) {
            let l = firstUnbalanced.right.left;
            rotateRight(firstUnbalanced.right, tree);
            familyLine.current.pop();
            firstUnbalanced.right = l;
            
            

        }

        ////Left Right case
        //if (getBalance(firstUnbalanced) === -2 && getBalance(firstUnbalanced.left) === 1) {

        //    var r = firstUnbalanced.left.right;
        //    rotateLeft(firstUnbalanced.left, tree);
        //    firstUnbalanced.left = r;


            
        //}


        //console.log(firstUnbalanced.left)
        //rotateRight(firstUnbalanced, tree);

        //}
        
        //animationFunction.current = rotateStep();
        forceUpdate();
        
    }

    //changes the animation speed when the slider changes
    const updateSpeed = () => {
        if (animationFunction.current != null) {
            clearInterval(interval.current);
            interval.current = setInterval(() => {
                animationFunction.current();
                forceUpdate();
            }, 1000 - speedSlider.current.value);
        }
    }

    return (
        <div className="binary-search-tree">
            <div id="main">
                <div className="controls">
                    <button id="randomButton" onClick={randomTree}>Random</button>
                    <br />
                    <button id="insertButton" onClick={insert}>Insert</button>
                    <input ref={insertInput} type="text"></input>
                    <br />
                    <button id="removeButton" onClick={remove}>Remove</button>
                    <input ref={removeInput} type="text"></input>
                    <br />
                    <button id="findButton" onClick={find}>Find</button>
                    <input ref={findInput} type="text"></input>
                    <br />
                    <span className="labeledSlider">
                        <label>Animation Speed</label>
                        <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                    </span>
                </div>
                <div className="visualization">
                    <BinaryTreeDisplay tree={tree} border={focus.current} green={green.current} pink={pink.current} yellow={yellow.current} />
                    <p>Balance of Tree: {getBalance(tree.root)}</p>
                </div>
            </div>
            <div className="legend">
                <Element border="bordered"></Element>
                <p>= Current Focus</p>
                <br />
                <Element color="green"></Element>
                <p>= Last Inserted Element</p>
                < br />
                <Element color="pink"></Element>
                <p>= Element to Delete</p>
                <br />
                <Element color="yellow"></Element>
                <p>= Last Found Element</p>
            </div>
        </div>
    );

}

export default AvlTree;