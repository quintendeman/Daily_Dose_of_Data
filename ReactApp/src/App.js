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
import BinaryTree from './BinaryTree/BinaryTree';
import BinaryTreeInformation from './BinaryTree/BinaryTreeInformation';
import BinarySearchTree from './BinarySearchTree/BinarySearchTree';
import BinarySearchTreeInformation from './BinarySearchTree/BinarySearchTreeInformation';
import SelectionSort from './SelectionSort/SelectionSort';
import SelectionSortInformation from './SelectionSort/SelectionSortInformation';
import LinkedList from './LinkedList/LinkedList';
import LinkedListInformation from './LinkedList/LinkedListInformation';
import InsertionSort from './InsertionSort/InsertionSort';
import Array from './Array/Array';
import ArrayInformation from './Array/ArrayInformation';
import BubbleSort from './BubbleSort/BubbleSort';
import ArrayList from './ArrayList/ArrayList';
import ArrayListInformation from './ArrayList/ArrayListInformation';
import MergeSort from './MergeSort/MergeSort';
import QuickSort from './QuickSort/QuickSort';

const App = () => {
		return (
			<>
				<BrowserRouter>
					<header>DAILY DOSE OF DATA</header>
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
								<Route exact path="/Array">
									<ArrayInformation />
									<Array />
								</Route>
								<Route exact path="/Linked List">
									<LinkedListInformation />
									<LinkedList />
								</Route>
								<Route exact path="/Array List">
									<ArrayListInformation />
									<ArrayList />
								</Route>
								<Route exact path="/Binary Tree">
									<BinaryTreeInformation />
									<BinaryTree />
								</Route>
								<Route exact path="/Binary Search Tree">
									<BinarySearchTreeInformation />
									<BinarySearchTree />
								</Route>
								<Route exact path="/Graph">

								</Route>
								<Route exact path="/Set">

								</Route>
								<Route exact path="/Map">

								</Route>
								<Route exact path="/Selection Sort">
									<SelectionSortInformation />
									<SelectionSort />
								</Route>
								<Route exact path="/Insertion Sort">
									<InsertionSort />
								</Route>
								<Route exact path="/Bubble Sort">
									<BubbleSort />
								</Route>
								<Route exact path="/Merge Sort">
									<MergeSort />
								</Route>
								<Route exact path="/Quick Sort">
									<QuickSort />
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