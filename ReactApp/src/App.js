import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './Navigation/Navigation';
import List from './List/List';
import ListInformation from './List/ListInformation';
import Stack from './Stack/Stack';
import StackInformation from './Stack/StackInformation';
import Queue from './Queue/Queue';
import QueueInformation from './Queue/QueueInformation';
import SelectionSort from './SelectionSort/SelectionSort';
import LinkedList from './Linked List/LinkedList';
import LinkedListInformation from './Linked List/LinkedListInformation';
import InsertionSort from './Insertion Sort/InsertionSort';

const App = () => {
		return (
			<>
				<BrowserRouter>
					<header>WEBSITE NAME WEBSITE NAME WEBSITE NAME</header>
					<div className="main">
						<Navigation />
						<div className="content">
						<Switch>
							<Route exact path="/">
								<div className="information">
									<p>Home page</p>
								</div>
							</Route>
							<Route exact path="/List">
								<ListInformation />
								<List />
							</Route>
							<Route exact path="/Stack">
								<StackInformation />
								<Stack />	
							</Route>
							<Route exact path="/Queue">
								<QueueInformation />
								<Queue />
							</Route>
								<Route exact path="/Linked List">
									<LinkedListInformation/>
									<LinkedList />
								</Route>
							<Route exact path="/Selection Sort">
								<SelectionSort />
							</Route>
							<Route exact path="/Insertion Sort">
								<InsertionSort />
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