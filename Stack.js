class Stack {

    constructor() {
        this.array = []
    }

    push(data) {
        this.array.push(data)
    }

    pop() {
        return this.array.pop()
    }

    peek() {
        return this.array[this.array.length - 1]
    }
}

var mainStack = new Stack()
var lastReturned = undefined

var canvas = document.getElementById("main-canvas")
var ctx = canvas.getContext("2d")
// get the stack input and output box components
var stackInput = document.getElementById("stack-input")
var stackOutput = document.getElementById("stack-ouput")

// draw a left arrow with the point at (x,y)
function drawLeftArrow(x, y, width, height) {
	ctx.beginPath()
	ctx.moveTo(x, y)
	ctx.lineTo(x + width / 3, y + height / 2)
	ctx.lineTo(x + width / 3, y + height / 4)
	ctx.lineTo(x + width, y + height / 4)
	ctx.lineTo(x + width, y - height / 4)
	ctx.lineTo(x + width / 3, y - height / 4)
	ctx.lineTo(x + width / 3, y - height / 2)
	ctx.lineTo(x, y)
	ctx.lineWidth = 2
	ctx.stroke()
	ctx.fill()
}

function drawRightArrow(x, y, width, height) {
	ctx.beginPath()
	ctx.moveTo(x, y)
	ctx.lineTo(x - width / 3, y - height / 2)
	ctx.lineTo(x - width / 3, y - height / 4)
	ctx.lineTo(x - width, y - height / 4)
	ctx.lineTo(x - width, y + height / 4)
	ctx.lineTo(x - width / 3, y + height / 4)
	ctx.lineTo(x - width / 3, y + height / 2)
	ctx.lineTo(x, y)
	ctx.lineWidth = 2
	ctx.stroke()
	ctx.fill()
}

//functions to redraw the canvas after any Stack operation
function refreshCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.font = "bold 16px monospace"
	ctx.textAlign = "start"
	ctx.fillStyle = "#FFCCCB"
	drawLeftArrow(15, canvas.height / 2, 75, 50)
	ctx.fillStyle = "#90EE90"
	drawRightArrow(90, canvas.height / 2 + 60, 75, 50)
	ctx.fillStyle = "#000000"
	ctx.fillText("Pop", 26, canvas.height / 2 + 4)
	ctx.fillText("Push", 25, canvas.height / 2 + 65)
	ctx.lineWidth = 4
	ctx.font = "bold 28px monospace"
	ctx.textAlign = "center"
	for (var i = 0; i < mainStack.array.length; i++) {
		ctx.beginPath()
		ctx.arc(i * 100 + 150, canvas.height / 2, 40, 0, 2 * Math.PI)
		ctx.stroke()
		ctx.fillText(mainStack.array[mainStack.array.length - i - 1], i * 100 + 148, canvas.height / 2 + 8)
	}
}
//load the canvas in the beginning
refreshCanvas()
//function to push to mainStack
function mainPush() {
	var data = parseInt(stackInput.value)
	if (!isNaN(data))
		mainStack.push(data)
	stackInput.value = null
	refreshCanvas()
}

//function to pop from mainStack
function mainPop() {
	lastReturned = mainStack.pop()
	if (lastReturned == undefined)
		stackOutput.value = "None"
	else
		stackOutput.value = lastReturned
	refreshCanvas()
}

//function to peek from mainStack
function mainPeek() {
	lastReturned = mainStack.peek()
	if (lastReturned == undefined)
		stackOutput.value = "None"
	else
		stackOutput.value = lastReturned
	refreshCanvas()

}