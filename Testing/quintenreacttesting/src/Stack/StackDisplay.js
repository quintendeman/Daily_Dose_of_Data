import React from 'react';
import './StackDisplay.css';
import Element from './Element'

const StackDisplay = (props) => {
	
	return (
		props.stack.map((value, index) => {
			return <Element key={index+1} value={value} />
		})
	);
}

export default StackDisplay;