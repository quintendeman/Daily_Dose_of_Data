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
var lastReturned = undefined
// get the canvas and canvas context
var canvas = document.getElementById("mainCanvas")
var ctx = canvas.getContext("2d")
// get the queue input and output box components
var queueInput = document.getElementById("queueInput")
var queueOutput = document.getElementById("queueOutput")

// draw a left arrow with the point at (x,y)
function drawLeftArrow(x, y, width, height) {
	ctx.beginPath()
	ctx.moveTo(x,y)
	ctx.lineTo(x+width/3,y+height/2)
	ctx.lineTo(x+width/3,y+height/4)
	ctx.lineTo(x+width,y+height/4)
	ctx.lineTo(x+width,y-height/4)
	ctx.lineTo(x+width/3,y-height/4)
	ctx.lineTo(x+width/3,y-height/2)
	ctx.lineTo(x,y)
	ctx.lineWidth = 2
	ctx.stroke()
	ctx.fill()
}
//functions to redraw the canvas after any Queue operation
function refreshCanvas() {
	ctx.clearRect(0,0,canvas.width,canvas.height)
	ctx.font = "bold 16px monospace"
	ctx.textAlign = "start"
	ctx.fillStyle = "#FFCCCB"
	drawLeftArrow(15, canvas.height/2, 75, 50)
	ctx.fillStyle = "#90EE90"
	drawLeftArrow(mainQueue.array.length*100+110, canvas.height/2, 75, 50)
	ctx.fillStyle = "#000000"
	ctx.fillText("Dequeue", 26, canvas.height/2+4)
	ctx.fillText("Enqueue", mainQueue.array.length*100+121, canvas.height/2+4)
	ctx.lineWidth = 3
	ctx.font = "bold 25px monospace"
	ctx.textAlign = "center"
	for (var i = 0; i < mainQueue.array.length; i++) {
		ctx.beginPath()
		ctx.arc(i*100+150, canvas.height/2, 40, 0, 2*Math.PI)
		ctx.stroke()
		ctx.fillText(mainQueue.array[mainQueue.array.length-i-1], i*100+148, canvas.height/2+8)
	}
}
//load the canvas in the beginning
refreshCanvas()
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