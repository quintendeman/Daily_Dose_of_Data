import React, { Component } from 'react';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Stack from './Stack/Stack';

class App extends Component {
	state = {}
	render() {
		return (
			<>
				<Navigation />
				<Stack />
			</>
		);
	}
}

export default App;