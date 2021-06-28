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
class QueueClass {
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

//returns a list of react element components from the queue component linked list
const QueueDisplay = (props) => {
	var current = props.queue.head;
    var index = 0;
    var componentList = [];
    while(current != null) {
        componentList.push(<Element key={index} value={current.value} />);
        current = current.next;
        index++;
    }
    return componentList;
}

//main react component for queue
const Queue = () => {
	
	const [, forceRender] = useState(0);
	const [queue,] = useState(new QueueClass());
	const queueInput = useRef();
	const queueOutput = useRef();
	
	//We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}
	
	const enqueue = () => {
		const data = parseInt(queueInput.current.value);
		if (!isNaN(data)) {
			queue.enqueue(data);
			forceUpdate();
		}
		queueInput.current.value = null;
	}
	
	const dequeue = () => {
		const data = queue.dequeue();
		forceUpdate();
		if (data === undefined)
			queueOutput.current.value = "None";
		else
			queueOutput.current.value = data;
	}
	
	const peek = () => {
		const data = queue.peek();
		if (data === undefined)
			queueOutput.current.value = "None";
		else
			queueOutput.current.value = data;
	}
	
	return (
		<div className="queue">
			<div className="controls">
				<button id="enqueueButton" onClick={enqueue}>Enqueue</button>
				<input id="queueInput" ref={queueInput} type="text" />
				<br />
				<button id="dequeueButton" onClick={dequeue}>Dequeue</button>
				<br />
				<input id="queueOutput" ref={queueOutput} type="text" readOnly />
				<br />
				<button id="peekButton" onClick={peek}>Peek</button>
				<br />
			</div>
			<div className="visualization">
				<div className="queueEnd">
                <p>Dequeue &#x2190;</p>
                </div>
                <QueueDisplay queue={queue} />
				<div className="queueEnd">
					<p>&#x2190; Enqueue</p>
				</div>
			</div>
		</div>
	);
}

export default Queue;