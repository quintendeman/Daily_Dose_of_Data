import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Stack from './Stack/Stack';
import Queue from './Queue/Queue';

const App = () => {
		return (
			<>
				<BrowserRouter>
					<div className="main">
						<Navigation />
						<Switch>
							<Route path="/stack">
								<Stack />
							</Route>
							<Route path="/queue">
								<Queue />
							</Route>
						</Switch>
					</div>
				</BrowserRouter>
			</>
		);
}

export default App;