import React, { useState, useRef, useEffect } from 'react';
import './BinaryHeap.scss';
import BinaryTreeDisplay from '../BinaryTree/BinaryTreeDisplay.js';

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

//class for binary heap data structure
class BinaryHeapClass {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        var current = this.heap.length-1;
        var parent = Math.floor((current-1)/2);
        while(parent >= 0) {
            if (this.heap[current] < this.heap[parent]) {
                let temp = this.heap[parent];
                this.heap[parent] = this.heap[current];
                this.heap[current] = temp;
                current = parent;
                parent = Math.floor((current-1)/2);
            } else
                break;
        }
    }

    remove() {
        if (this.heap.length !== 0) {
            if (this.heap.length === 1)
                this.heap = [];
            else {
                this.heap[0] = this.heap.pop();
                var current = 0;
                while (current < this.heap.length) {
                    if (2 * current + 2 < this.heap.length) {
                        if (this.heap[current] <= this.heap[2 * current + 1] && this.heap[current] <= this.heap[2 * current + 2]) {
                            break;
                        } else if (this.heap[2 * current + 1] < this.heap[2 * current + 2]) {
                            let temp = this.heap[current];
                            this.heap[current] = this.heap[2 * current + 1];
                            this.heap[2 * current + 1] = temp;
                            current = 2 * current + 1;
                        } else {
                            let temp = this.heap[current];
                            this.heap[current] = this.heap[2 * current + 2];
                            this.heap[2 * current + 2] = temp;
                            current = 2 * current + 2;
                        }
                    } else if (2 * current + 1 < this.heap.length) {
                        if (this.heap[current] > this.heap[2 * current + 1]) {
                            let temp = this.heap[current];
                            this.heap[current] = this.heap[2 * current + 1];
                            this.heap[2 * current + 1] = temp;
                            current = 2 * current + 1;
                        } else {
                            break;
                        }
                    } else {
                        break;
                    }
                }
            }
        }
    }

    getTree() {
        var tree = new BinaryTreeClass(null);
        if (this.heap.length !== 0) {
            tree.root = new BinaryTreeNode(this.heap[0]);
            var nodes = [tree.root];
            var newNodes = [];
            var indices = [0];
            var newIndices = [];
            while (nodes.length !== 0) {
                for (let i = 0; i < nodes.length; i++) {
                    if (2*indices[i]+1 < this.heap.length) {
                        nodes[i].left = new BinaryTreeNode(this.heap[2*indices[i]+1]);
                        newNodes.push(nodes[i].left);
                        newIndices.push(2*indices[i]+1);
                    }
                    if (2*indices[i]+2 < this.heap.length) {
                        nodes[i].right = new BinaryTreeNode(this.heap[2*indices[i]+2]);
                        newNodes.push(nodes[i].right);
                        newIndices.push(2*indices[i]+2);
                    }
                }
                nodes = newNodes;
                newNodes = [];
                indices = newIndices;
                newIndices = [];
            }
        }
        return tree;
    }
}

//main react component for binary heap visualization
const BinaryHeap = () => {

    const [, forceRender] = useState(0);
    const [heap, setHeap] = useState(new BinaryHeapClass());
    const insertInput = useRef();
    const speedSlider = useRef();
    const interval = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //function to create a random heap
    const randomHeap = () => {
        const elements = randInt(2,32);
        var newHeap = new BinaryHeapClass();
        for (let i = 0; i < elements; i++)
            newHeap.insert(randInt(-999,1000));
        setHeap(newHeap);
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize the tree to a random binary heap
    useEffect(randomHeap, []);

    //function to insert a value into the heap
    const insert = () => {
        var data = parseInt(insertInput.current.value);
        if (isNaN(data))
            data = randInt(-999, 1000);
        heap.insert(data);
        forceUpdate();
        insertInput.current.value = null;
    }

    //function to remove a value from the heap
    const remove = () => {
        heap.remove();
        forceUpdate();
    }

    //changes the animation speed when the slider changes
    const updateSpeed = () => {
        clearInterval(interval.current);
        interval.current = setInterval(() => {
            
            forceUpdate();
        }, 1000 - speedSlider.current.value);
    }

    return (
        <div className="binary-heap">
            <div className="controls">
                <button id="randomButton" onClick={randomHeap}>Random</button>
                <br />
                <button id="insertButton" onClick={insert}>Insert</button>
                <input ref={insertInput} type="text"></input>
                <br />
                <button id="removeButton" onClick={remove}>Remove</button>
                <br />
                <span className="labeledSlider">
                    <label>Animation Speed</label>
                    <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                </span>
            </div>
            <div className="visualization">
                <BinaryTreeDisplay tree={heap.getTree()} />
            </div>
        </div>
    );
}

export default BinaryHeap;