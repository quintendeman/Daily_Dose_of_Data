import React, { useState, useRef } from 'react';
import './Stack.scss';
import Element from '../Element/Element'

//returns a list of element components from the stack array
const StackDisplay = (props) => {
	return (
		props.stack.map((value, index) => {
			return <Element key={index} value={value} />
		})
	);
}

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