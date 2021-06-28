import React, { useState, useRef } from 'react';
import './List.scss';
import Element from '../Element/Element';

//main react component for list
const List = () => {

    const [, forceRender] = useState(0);
    const [list,] = useState([]);
    const insertIndex = useRef();
    const insertValue = useRef();
    const removeIndex = useRef();
    const listOutput = useRef();
    const getIndex = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    const insert = () => {
        const index = parseInt(insertIndex.current.value);
        const value = parseInt(insertValue.current.value);
        if (!isNaN(index) && !isNaN(value) && index >= 0 && index <= list.length) {
            list.splice(index, 0, value);
            forceUpdate();
        } else {
            listOutput.current.value = "Invalid";
        }
        insertIndex.current.value = null;
        insertValue.current.value = null;
    }

    const remove = () => {
        const index = parseInt(removeIndex.current.value);
        if (!isNaN(index) && index >= 0 && index < list.length) {
            const data = list.splice(index, 1);
            forceUpdate();
            listOutput.current.value = data;
        } else {
            listOutput.current.value = "Invalid";
        }
        removeIndex.current.value = null;
    }

    const get = () => {
        const index = parseInt(getIndex.current.value);
        if (!isNaN(index) && index >= 0 && index < list.length) {
            const data = list[index];
            listOutput.current.value = data;
        } else {
            listOutput.current.value = "Invalid";
        }
        getIndex.current.value = null;
    }

    return (
        <div className="list">
            <div className="controls">
                <button id="insertButton" onClick={insert}>Insert</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="insertIndex" ref={insertIndex} type="text"></input>
                </span>
                <span className="labeledInput">
                    <label>Value</label>
                    <input id="insertValue" ref={insertValue} type="text"></input>
                </span>
                <br />
                <button id="removeButton" onClick={remove}>Remove</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="removeIndex" ref={removeIndex} type="text"></input>
                </span>
                <br />
                <input id="listOutput" type="text" ref={listOutput} readOnly></input>
                <br />
                <button id="getButton" onClick={get}>Get</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="getIndex" ref={getIndex} type="text"></input>
                </span>
            </div>
            <div className="visualization">
            </div>
        </div>
    );
}

export default List;