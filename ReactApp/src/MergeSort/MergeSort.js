import React, { useState, useRef } from 'react';
import './MergeSort.scss';
import Element from '../Element/Element';

const exampleArrays = [[-4,0,3,7],[-8,1,2,11],[-5,3,8,9],[-9,-4,-3,2],[1,3,6]];
const exampleNextArrays = [[1],[2],[3]];

//react component to display merge sort arrays
const MergeSortDisplay = (props) => {
    var componentList = [];
    componentList.push(<hr key={componentList.length} />);
    for (let i = 0; i < props.arrays.length; i++) {
        for (let j = 0; j < props.arrays[i].length; j++)
            componentList.push(<Element key={componentList.length} value={props.arrays[i][j]} />);
        if (i % 2 === 0)
            componentList.push(<span className="invisible" key={componentList.length} />);
        else
            componentList.push(<hr key={componentList.length} />);
    }
    if (props.arrays.length % 2 === 1) {
        componentList.push(<Element key={componentList.length} color="none" />);
        componentList.push(<hr key={componentList.length} />);
    }
    return componentList;
}

//react component to display the arrays that are being formed in merge sort
const MergeSortNextDisplay = (props) => {
    var componentList = [];
    componentList.push(<hr key={componentList.length} />);
    for (let i = 0; i < props.arrays.length; i++) {
        componentList.push(
            <div className="merge-sort-next-list">
                <ElementList array={props.arrays[i]} />
            </div>
        );
        componentList.push(<hr key={componentList.length} />);
    }
    return componentList;
}

const ElementList = (props) => {
    var componentList = [];
    for (let i = 0; i < props.array.length; i++)
        componentList.push(<Element key={componentList.length} value={props.array[i]} />);
    return componentList;
}

//react component for merge sort
const MergeSort = () => {

    const [arrays, setArrays] = useState(exampleArrays);
    const [nextArrays, setNextArrays] = useState(exampleNextArrays);
    const [sorted, setSorted] = useState(false);
    const sorting = useRef(false);
    const interval = useRef(null);
    const toggleSortingButton = useRef();
    const speedSlider = useRef();

    //function to do a single step of merge sorting
    const sortingStep = () => {
        
    }

    //function to turn sorting on and off by button click
    const toggleSorting = () => {
        if (sorting.current) {
            clearInterval(interval.current);
            sorting.current = false;
            toggleSortingButton.current.innerHTML = "Sort";
            toggleSortingButton.current.classList.remove("pinkButton");
            toggleSortingButton.current.classList.add("greenButton");
        } else if (!sorted) {
            interval.current = setInterval(() => {
                sortingStep();
            }, 1000-speedSlider.current.value);
            sorting.current = true;
            toggleSortingButton.current.innerHTML = "Stop";
            toggleSortingButton.current.classList.remove("greenButton");
            toggleSortingButton.current.classList.add("pinkButton");
        }
    }
    //changes the animation speed of sorting when the slider changes
    const updateSpeed = () => {
        if (sorting.current) {
            clearInterval(interval.current);
            interval.current = setInterval(() => {
                sortingStep();
            }, 1000-speedSlider.current.value);
        }
    }

    return (
        <div className="merge-sort">
            <div className="controls">
                <button ref={toggleSortingButton} className="greenButton" onClick={toggleSorting}>Sort</button>
                <br />
                <span className="labeledSlider">
                    <label>Animation Speed</label>
                    <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                </span>
            </div>
            <div className="visualization">
                <div className="merge-sort-display">
                    <div className="current-arrays">
                        <MergeSortDisplay arrays={arrays} />
                    </div>
                    <div className="next-arrays">
                        <MergeSortNextDisplay arrays={nextArrays} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MergeSort;