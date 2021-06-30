import React from 'react';
import { Link } from 'react-router-dom';

const LinkedListInformation = () => {
	return (
		<div className="information">
			<h1>Linked List</h1>
			<p>A Linked List is a linear collection of data. It consists of a collection of nodes, each one pointing to another to create a sequence. Since data for a Linked List does not need to be allocated adjacently in memory, it benefits from the ability to insert and delete elements at any point in the linked list without restructuring and reallocating data in memory. However, one prominent trade off for these benefits is the lack of random access, which can cause basic operations, such as obtaining a node by a given index or locating a point of inserstion/deletion, to likely require iterating through the data strcture. </p>
			

			<br />
			<p><u>Since a Linked List is a Concrete Data Type, it is often used to implement different Abstract Data Types including:</u></p>
			<ul>
				<li><Link to="/List"><b>Lists</b></Link></li>
				<li><Link to="/Stack"><b>Stacks</b></Link></li>
				<li><Link to="/Queue"><b>Queues</b></Link></li>
			</ul>

		</div>
		//TODO add more 
	);
}

export default LinkedListInformation;