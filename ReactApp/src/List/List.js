import React, { useState, useRef } from 'react';
import './List.scss';
import Element from '../Element/Element';

//main react component for list
const List = () => {

    const [, forceRender] = useState(0);
    const [list,] = useState([]);

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    return (
        <div className="list">
            <div className="controls">
                <button id="insertButton">Insert</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="insertIndex" type="text"></input>
                </span>
                <span className="labeledInput">
                    <label>Value</label>
                    <input id="insertValue" type="text"></input>
                </span>
                <br />
                <button id="removeButton">Remove</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="removeIndex" type="text"></input>
                </span>
                <br />
                <input id="listOutput" type="text" readOnly></input>
                <br />
                <button id="getButton">Get</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="getIndex" type="text"></input>
                </span>
            </div>
            <div className="visualization">
            </div>
        </div>
    );
}

export default List;