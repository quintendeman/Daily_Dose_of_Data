import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Array from './Array/Array';
import ArrayInformation from './Array/ArrayInformation';
import List from './List/List';
import ListInformation from './List/ListInformation';
import ArrayList from './ArrayList/ArrayList';
import ArrayListInformation from './ArrayList/ArrayListInformation';
import LinkedList from './LinkedList/LinkedList';
import LinkedListInformation from './LinkedList/LinkedListInformation';
import Stack from './Stack/Stack';
import StackInformation from './Stack/StackInformation';
import Queue from './Queue/Queue';
import QueueInformation from './Queue/QueueInformation';
import BinaryTree from './BinaryTree/BinaryTree';
import BinaryTreeInformation from './BinaryTree/BinaryTreeInformation';
import BinarySearchTree from './BinarySearchTree/BinarySearchTree';
import BinarySearchTreeInformation from './BinarySearchTree/BinarySearchTreeInformation';
import AvlTree from './AvlTree/AvlTree';
import BinaryHeap from './BinaryHeap/BinaryHeap';
import BinaryHeapInformation from './BinaryHeap/BinaryHeapInformation';
import HashTable from './HashTable/HashTable';
import HashTableInformation from './HashTable/HashTableInformation';
import Set from './Set/Set';
import SetInformation from './Set/SetInformation';
import Map from './Map/Map';
import MapInformation from './Map/MapInformation';
import InsertionSort from './InsertionSort/InsertionSort';
import SelectionSort from './SelectionSort/SelectionSort';
import SelectionSortInformation from './SelectionSort/SelectionSortInformation';
import BubbleSort from './BubbleSort/BubbleSort';
import MergeSort from './MergeSort/MergeSort';
import MergeSortInformation from './MergeSort/MergeSortInformation';
import QuickSort from './QuickSort/QuickSort';
import HeapSort from './HeapSort/HeapSort';
import HeapSortInformation from './HeapSort/HeapSortInformation';
import DepthFirstSearch from './DepthFirstSearch/DepthFirstSearch';
import DepthFirstSearchInformation from './DepthFirstSearch/DepthFirstSearchInformation';
import BreadthFirstSearch from './BreadthFirstSearch/BreadthFirstSearch';
import BreadthFirstSearchInformation from './BreadthFirstSearch/BreadthFirstSearchInformation';

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
								<Route exact path="/Array">
									<ArrayInformation />
									<Array />
								</Route>
								<Route exact path="/List">
									<ListInformation />
									<List />
								</Route>
								<Route exact path="/Array List">
									<ArrayListInformation />
									<ArrayList />
								</Route>
								<Route exact path="/Linked List">
									<LinkedListInformation />
									<LinkedList />
								</Route>
								<Route exact path="/Stack">
									<StackInformation />
									<Stack />
								</Route>
								<Route exact path="/Queue">
									<QueueInformation />
									<Queue />
								</Route>
								<Route exact path="/Binary Tree">
									<BinaryTreeInformation />
									<BinaryTree />
								</Route>
								<Route exact path="/Binary Search Tree">
									<BinarySearchTreeInformation />
									<BinarySearchTree />
								</Route>
								<Route exact path="/Avl Tree">
									<AvlTree />
								</Route>
								<Route exact path="/Binary Heap">
									<BinaryHeapInformation />
									<BinaryHeap />
								</Route>
								<Route exact path="/Hash Table">
									<HashTableInformation />
									<HashTable />
								</Route>
								<Route exact path="/Set">
									<SetInformation />
									<Set />
								</Route>
								<Route exact path="/Map">
									<MapInformation />
									<Map />
								</Route>
								<Route exact path="/Insertion Sort">
									<InsertionSort />
								</Route>
								<Route exact path="/Selection Sort">
									<SelectionSortInformation />
									<SelectionSort />
								</Route>
								<Route exact path="/Bubble Sort">
									<BubbleSort />
								</Route>
								<Route exact path="/Merge Sort">
									<MergeSortInformation />
									<MergeSort />
								</Route>
								<Route exact path="/Quick Sort">
									<QuickSort />
								</Route>
								<Route exact path="/Heap Sort">
									<HeapSortInformation />
									<HeapSort />
								</Route>
								<Route exact path="/Linear Search">

								</Route>
								<Route exact path="/Binary Search">

								</Route>
								<Route exact path="/Depth First Search">
									<DepthFirstSearchInformation />
									<DepthFirstSearch />
								</Route>
								<Route exact path="/Breadth First Search">
									<BreadthFirstSearchInformation />
									<BreadthFirstSearch />
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