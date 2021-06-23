import React, { useState, useRef } from 'react';
import './Stack.css';

const StackComponent = () => {
	
	const [stack, setStack] = useState([])
	const stackInput = useRef()
	const stackOutput = useRef()
	
	//We call setStack without changing anything to force a re-render
	const forceUpdate = () => {
		setStack(prevStack => (prevStack));
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
		</>
	);
}

export default StackComponent;