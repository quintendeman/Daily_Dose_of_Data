import React from 'react';
import './Element.css';

const Element = (props) => {
	return (
		<p className="element">{props.value}</p>
	);
}

export default Element;