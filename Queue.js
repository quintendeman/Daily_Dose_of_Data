// define Queue class
class Queue {
	constructor() {
		this.array = []
	}
	// add an element to the queue
	enqueue(data) {
		this.array.unshift(data)
	}
	// remove an element from the queue
	dequeue() {
		return this.array.pop()
	}
	// look at the next element to be removed
	peek() {
		return this.array[this.array.length-1]
	}
}

// initialize a Queue to be used by the page
mainQueue = new Queue();
mainQueue.enqueue(1);	//temporary
mainQueue.enqueue(2);	//temporary

//function to refresh the canvas after any Queue operation
function refreshCanvas() {
	
}
// function to add to mainQueue
function mainEnqueue() {
	input = document.getElementById("enqueueInput");
	data = parseInt(input.value);
	if (!isNaN(data))
		mainQueue.enqueue(data);
	input.value = null;
	refreshCanvas();
}
// function to remove from mainQueue
function mainDequeue() {
	data = mainQueue.dequeue();
	
	refreshCanvas();
}
// function to peek from mainQueue
function mainPeek() {
	data = mainQueue.peek();
	
	refreshCanvas();
}