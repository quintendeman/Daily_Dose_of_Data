import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Stack from './Stack/Stack';
import StackInformation from './Stack/StackInformation'
import Queue from './Queue/Queue';

const App = () => {
		return (
			<>
				<BrowserRouter>
					<header>WEBSITE NAME</header>
					<div className="main">
						<Navigation />
						<div className="content">
						<Switch>
							<Route path="/stack">
								<StackInformation />
								<Stack />	
							</Route>
							<Route path="/queue">
								<Queue />
							</Route>
						</Switch>
						</div>
					</div>
					<footer>Made by Quinten De Man and Zackary Lassetter</footer>
				</BrowserRouter>
			</>
		);
}

export default App;