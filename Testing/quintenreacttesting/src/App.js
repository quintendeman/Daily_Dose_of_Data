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
					<header>WEBSITE NAME</header>
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
					<footer>Made by Quinten De Man and Zackary Lassetter</footer>
				</BrowserRouter>
			</>
		);
}

export default App;