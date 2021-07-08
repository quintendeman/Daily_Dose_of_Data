import React, { useState, useRef } from 'react';
import './Array.scss';
import Element from '../Element/Element';

const ArrayDisplay = (props) => {
    return props.array.map((value, index) => {
        return (
            <div key={index} className="labeledElement">
                <label>{index}</label>
                <Element value={value}></Element>
            </div>
        );
    });
}

const Array = () => {
    const [array,] = useState([]);
    const [, forceRender] = useState(0);
    const arraySize = useRef();
    const setIndex = useRef();
    const setValue = useRef();
    const deleteIndex = useRef();
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
        arraySize.current.value = null;
            forceUpdate();
        
    }

    const insert = () => {
        const index = parseInt(setIndex.current.value);
        const value = parseInt(setValue.current.value);
        if (!isNaN(index) && !isNaN(value) && index >= 0 && index < array.length) {
            array[index] = value;
            forceUpdate();
        } else {
            arrayOutput.current.value = "Invalid";
        }
        setIndex.current.value = null;
        setValue.current.value = null;
    }

    const remove = () => {
        const index = parseInt(deleteIndex.current.value);
        if (!isNaN(index) && index >= 0 && index < array.length) {
            const data = array[index];
            arrayOutput.current.value = data;
            if (array[index] == null) {
                arrayOutput.current.value = "Invalid";
            }
            array[index] = null;
            
            forceUpdate();
            
        }
        
        else {
            arrayOutput.current.value = "Invalid";
        }
        deleteIndex.current.value = null;
    }

    const get = () => {
        const index = parseInt(getIndex.current.value);
        if (!isNaN(index) && index >= 0 && index < array.length) {
            const data = array[index];
            arrayOutput.current.value = data;
            if (array[index] == null) {
                arrayOutput.current.value = "null";
            }
        } else {
            arrayOutput.current.value = "Invalid";
        }
        getIndex.current.value = null;
    }


    return (
        <div className="array">
            <div className="controls">
                <button id="buildButton" onClick={build}>Build</button>
                <span className="labeledInput">
                    <label>Size</label>
                    <input type="text" ref={arraySize}></input>
                </span>
                <br />
                <button id="setButton" onClick={insert}>Set</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="setIndex" type="text" ref={setIndex}></input>
                </span>
                <span className="labeledInput">
                    <label>Value</label>
                    <input id="setValue" type="text" ref={setValue}></input>
                </span>
                <br />
                <button id="deleteButton" onClick={remove}>Delete</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input type="text" ref={deleteIndex}></input>
                </span>
                <br />
                <button id="getButton" onClick={get}>Get</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input type="text" ref={getIndex}></input>
                </span>
                
                <br />
                <input id="arrayOutput" type="text" ref={arrayOutput} readOnly></input>
                <br />
                
            </div>
            <div className="visualization">
                <ArrayDisplay array={array} />
            </div>
        </div>
    );
}

export default Array;