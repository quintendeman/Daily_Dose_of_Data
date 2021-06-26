import React, { useState, useRef } from 'react';
import './Queue.scss';
import Element from '../Element/Element';

//define Queue Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//define Queue class with linked list implementation
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    enqueue (data) {
        if (this.head == null) {
            this.tail = new Node(data);
            this.head = this.tail;
        } else {
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
        }
    }
    dequeue () {
        if (this.head == null) {
            return undefined;
        } else {
            const temp = this.head;
            this.head = this.head.next;
            if (this.head == null)
                this.tail = null;
            return temp.value;
        }
    }
    peek () {
        if (this.head == null) {
            return undefined;
        } else {
            return this.head.value;
        }
    }
}

//returns a list of react element components from the stack component array
const StackDisplay = (props) => {
	return props.stack.map((value, index) => {
		return <Element key={index} value={value} />
	});
}

//main react component for stack
const Stack = () => {
	
	const [, forceRender] = useState(0);
	const [stack,] = useState([]);
	const stackInput = useRef();
	const stackOutput = useRef();
	
	//We call setStack without changing anything to force a re-render
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}
	
	const push = () => {
		const data = parseInt(stackInput.current.value);
		if (!isNaN(data)) {
			stack.push(data);
			forceUpdate();
		}
		stackInput.current.value = null;
	}
	
	const pop = () => {
		const data = stack.pop();
		forceUpdate();
		if (data === undefined)
			stackOutput.current.value = "None";
		else
			stackOutput.current.value = data;
	}
	
	const peek = () => {
		const data = stack[stack.length-1];
		if (data === undefined)
			stackOutput.current.value = "None";
		else
			stackOutput.current.value = data;
	}
	
	return (
		<div className="stack">
			<div className="controls">
				<button id="pushButton" onClick={push}>Push</button>
				<input id="stackInput" ref={stackInput} type="text" />
				<br />
				<button id="popButton" onClick={pop}>Pop</button>
				<br />
				<input id="stackOutput" ref={stackOutput} type="text" readOnly />
				<br />
				<button id="peekButton" onClick={peek}>Peek</button>
				<br />
			</div>
			<div className="visualization">
				<StackDisplay stack={stack} />
				<div id="stackTop">
					<p>&#x2190; Push</p>
					<br />
					<p>&#x2192; Pop</p>
				</div>
			</div>
		</div>
	);
}

export default Stack;