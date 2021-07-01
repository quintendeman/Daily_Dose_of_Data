import React, { useState, useRef } from 'react';
import './Array.scss';
import Element from '../Element/Element';

const ArrayDisplay = (props) => {
    return props.array.map((value, index) => {
        return (
            <div className="labeledElement">
                <label>{index}</label>
                <Element key={index} value={value}></Element>
            </div>
        );
    });
}

const Array = () => {
    const [array,] = useState([]);
    const [, forceRender] = useState(0);
    const arraySize = useRef();
    const insertIndex = useRef();
    const insertValue = useRef();
    const removeIndex = useRef();
    const arrayOutput = useRef();
    const getIndex = useRef();

    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    const build = () => {
        array.length = 0;
            var size = arraySize.current.value;
            while (size > 0) {
                array.push(null);
                size--;
            }
            forceUpdate();
        
    }

    const insert = () => {
        const index = parseInt(insertIndex.current.value);
        const value = parseInt(insertValue.current.value);
        if (!isNaN(index) && !isNaN(value) && index >= 0 && index <= array.length) {
            array[index] = value;
            forceUpdate();
        } else {
            arrayOutput.current.value = "Invalid";
        }
        insertIndex.current.value = null;
        insertValue.current.value = null;
    }

    const remove = () => {
        const index = parseInt(removeIndex.current.value);
        if (!isNaN(index) && index >= 0 && index < array.length) {
            const data = array[index];
            arrayOutput.current.value = data;
            array[index] = null;
            forceUpdate();
            
        } else {
            arrayOutput.current.value = "Invalid";
        }
        removeIndex.current.value = null;
    }

    const get = () => {
        const index = parseInt(getIndex.current.value);
        if (!isNaN(index) && index >= 0 && index < array.length) {
            const data = array[index];
            arrayOutput.current.value = data;
        } else {
            arrayOutput.current.value = "Invalid";
        }
        getIndex.current.value = null;
    }


    return (
        <div className="array">
            <div className="controls">
                <button id="makeButton" onClick={build}>Build</button>
                <span className="labeledInput">
                    <label>Size</label>
                    <input type="text" ref={arraySize}></input>
                </span>
                <br />
                <button id="insertButton" onClick={insert}>Set</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input type="text" ref={insertIndex}></input>
                </span>
                <span className="labeledInput">
                    <label>Value</label>
                    <input type="text" ref={insertValue}></input>
                </span>
                <br />
                <button id="removeButton" onClick={remove}>Delete</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input type="text" ref={removeIndex}></input>
                </span>
                <br />
                <button id="getButton" onClick={get}>Get</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input type="text" ref={getIndex}></input>
                </span>
                
                <br />
                <input type="text" ref={arrayOutput} readOnly></input>
                <br />
                
            </div>
            <ArrayDisplay array={ array }/ >
        </div>);
}

export default Array;