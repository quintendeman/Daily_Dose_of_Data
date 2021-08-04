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
import AvlTreeInformation from './AvlTree/AvlTreeInformation';
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
import LinearSearch from './LinearSearch/LinearSearch';
import LinearSearchInformation from './LinearSearch/LinearSearchInformation';
import BinarySearch from './BinarySearch/BinarySearch';
import BinarySearchInformation from './BinarySearch/BinarySearchInformation';
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
									<AvlTreeInformation />
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
									<LinearSearchInformation />
									<LinearSearch />
								</Route>
								<Route exact path="/Binary Search">
									<BinarySearchInformation />
									<BinarySearch />
								</Route>
								<Route exact path="/Depth First Search">
									<DepthFirstSearchInformation />
									<DepthFirstSearch />
								</Route>
								<Route exact path="/Breadth First Search">
									<BreadthFirstSearchInformation />
									<BreadthFirstSearch />
								</Route>
								<Route exact path="/about">
									<div id="about-us" className="information">
										<h1>About Us</h1>
										<p>Thank you for visiting our website! We are two undergraduate college students studying in areas related to Computer Science. We decided to work together over an entire summer to bring to life this idea of a website to provide visualizations of various data structures and algorithms for educational purposes. We had little to no experience with web development before this, and we fully self-studied JavaScript, HTML, CSS, React.js, and Node.js, all of which were used to develop this website. This website is still a work in progress, and we plan to continue adding new content and features. Any feedback you would like to give us is appreciated, so feel free to contact us with the information below!</p>
										<br />
										<br />
										<div className="personal-information">
											<img src="stonybrooklogo.jpg" alt=""></img>
											<img src="quintenpicture.jpg" alt=""></img>
											<div id="quinten-information">
												<div className="information-header">
													<div className="personal-information-section">
														<p><b>Quinten De Man</b></p>
														<p>Stony Brook University</p>
														<p>Computer Science Honors</p>
														<p>Applied Mathematics and Statistics</p>
													</div>
													<div className="personal-information-section">
														<p><b>Email:</b> quinten.deman@gmail.com</p>
														<p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/quinten-de-man/">https://www.linkedin.com/in/quinten-de-man/</a></p>
														<p><b>GitHub:</b> <a href="https://github.com/quintendeman">https://github.com/quintendeman</a></p>
													</div>
												</div>
												<div className="biography">
													<p><b>Biography</b></p>
													<p>Quinten is a rising junior at Stony Brook University with a double major in Computer Science and Applied Mathematics and Statistics. He has interests in Data Structures, Algorithms, Web Development, Machine Learning, and Artificial Intelligence. He has lots of experience with these topics from previous research experiences, work experiences, personal projects, and academic coursework. For more information visit his LinkedIn or GitHub pages.</p>
												</div>
											</div>
											
										</div>
										<br />
										<br />
										<br />
										<br />
										<div className="personal-information">
											<img src="zackpicture.jpg" alt="" style={{ width: "225px" }}></img>
											<img src="northeasternlogo.png" alt="" style={{ width: "155px" }}></img>
											<div id="zack-information">
												<div className="information-header">
													<div className="personal-information-section">
														<p><b>Zackary Lassetter</b></p>
														<p>Northeastern University</p>
														<p>Northeastern National Merit Scholar</p>
														<p>Data Science and Economics</p>
													</div>
													<div className="personal-information-section">
														<p><b>Email:</b> zackary@lassetter.org</p>
														<p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/zackary-lassetter/">https://www.linkedin.com/in/zackary-lassetter/</a></p>
														<p><b>GitHub:</b> <a href="https://github.com/zlassetter">https://github.com/zlassetter</a></p>
													</div>
												</div>
												<div className="biography">
													<p><b>Biography</b></p>
													<p>Zackary is a rising sophmore at Northeastern University and is currently pursing a combined major in Data Science and Economics. He is interested many topics across the field of computer science including Data Structures and Algorithms, but is also interested in the applications of these tools in the fields of Quantitative Finance, Econometrics, and Data Analytics. Please visit his LinkedIn and GitHub for more information.</p>
												</div>
											</div>
											

										</div>
									</div>
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