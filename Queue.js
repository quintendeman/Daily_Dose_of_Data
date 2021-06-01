// define Queue class
class Queue {
	
	constructor() {
		this.array = []
	}
	
	// add an element to the queue
	enqueue(data) {
		this.array.shift(data)
	}
	
	// remove an element from the queue
	dequeue() {
		return this.array.pop()
	}
	
}