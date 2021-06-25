import React from 'react';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Stack from './Stack/Stack';

const App = () => {
		return (
			<>
				<div className="main">
					<Navigation />
					<Stack />
				</div>
			</>
		);
}

export default App;