import React, { Component } from 'react';
import './App.css';
import Stack from './Stack/Stack'

class App extends Component {
	state = {}
	render() {
		return (
			<>
				<p>Here is the stack:</p>
				<Stack />
			</>
		);
	}
}

export default App;