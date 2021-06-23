import React, { useState, useRef } from 'react';
import './Stack.css';
import StackDisplay from './StackDisplay';

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
		<>
			<button onClick={push}>Push</button>
			<input ref={stackInput} type="text" />
			<br />
			<button onClick={pop}>Pop</button>
			<input ref={stackOutput} type="text" readOnly />
			<button onClick={peek}>Peek</button>
			<br />
			<StackDisplay stack={stack} />
		</>
	);
}

export default Stack;