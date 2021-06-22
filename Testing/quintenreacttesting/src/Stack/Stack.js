import React, { Component } from 'react';
import './Stack.css';

class Stack extends Component {
	
	constructor(props){
		super(props);
		this.state = { stack: [] };
		this.stackInput = React.createRef();
		this.stackOutput = React.createRef();
	}
	
	push = () => {
		const data = this.stackInput.current.value;
		this.setState(prevState => ({
			stack: [...prevState.stack, data]
		}))
		this.stackInput.current.value = null;
	}
	
	//note to self slice O(n) should make better (clone?)
	pop = () => {
		this.setState(prevState => ({
			stack: prevState.stack.slice(0,prevState.stack.length-1)
		}))
	}
	
	render() {
		return (
			<>
				<p>Stack goes here.</p>
				<button onClick={this.push}>Push</button>
				<input ref={this.stackInput} type="text" />
				<button onClick={this.pop}>Pop</button>
				<input ref={this.stackOutput} type="text" readOnly />
			</>
		);
	}
}

export default Stack;