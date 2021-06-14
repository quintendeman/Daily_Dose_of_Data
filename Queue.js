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
var mainQueue = new Queue()
mainQueue.enqueue(1)	//temporary
mainQueue.enqueue(2)	//temporary
var lastReturned = undefined
// get the canvas and canvas context
var canvas = document.getElementById("mainCanvas")
var ctx = canvas.getContext("2d")
// get the queue input and output box components
var queueInput = document.getElementById("queueInput")
var queueOutput = document.getElementById("queueOutput")

//function to refresh the canvas after any Queue operation
function refreshCanvas() {
	ctx.clearRect(0,0,canvas.width,canvas.height)
	
}
// function to add to mainQueue
function mainEnqueue() {
	var data = parseInt(queueInput.value)
	if (!isNaN(data))
		mainQueue.enqueue(data)
	queueInput.value = null
	refreshCanvas()
}
// function to remove from mainQueue
function mainDequeue() {
	lastReturned = mainQueue.dequeue()
	if(lastReturned == undefined)
		queueOutput.value = "None"
	else
		queueOutput.value = lastReturned
	refreshCanvas()
}
// function to peek from mainQueue
function mainPeek() {
	lastReturned = mainQueue.peek()
	if(lastReturned == undefined)
		queueOutput.value = "None"
	else
		queueOutput.value = lastReturned
	refreshCanvas()
}