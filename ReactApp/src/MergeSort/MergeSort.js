import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MergeSort.scss';
import Element from '../Element/Element';

//react component to display merge sort arrays
const MergeSortDisplay = (props) => {
    var componentList = [];
    for (let i = 0; i < props.mergedArrays.length; i++) {
        var array1 = props.arrays[2*i];
        var array2 = [];
        if (2*i+1 < props.arrays.length)
            array2 = props.arrays[2*i+1];
        componentList.push(<MergeSortDisplayRow key={componentList.length} array1={array1} array2={array2} mergedArray={props.mergedArrays[i]} />);
        componentList.push(<hr key={componentList.length} />);
    }
    componentList.pop();
    return componentList;
}

//react component to display a merge sort row consisting of 2 arrays, and the array it is merging into
const MergeSortDisplayRow = (props) => {
    return (
        <div className="merge-sort-display-row">
            <div>
                <MergeSortDisplayRowHelper1 array1={props.array1} array2={props.array2} />
            </div>
            <div>
                <MergeSortDisplayRowHelper2 array={props.mergedArray} />
            </div>
        </div>
    );
}
const MergeSortDisplayRowHelper1 = (props) => {
    var componentList = [];
    for (let i = 0; i < props.array1.length; i++) {
        if (i === props.array1.length-1)
            componentList.push(<Element key={componentList.length} value={props.array1[i]} border="bordered" />);
        else
            componentList.push(<Element key={componentList.length} value={props.array1[i]} />);
    }
    if (props.array1.length === 0)
        componentList.push(<Element key={componentList.length} color="none" />);
    componentList.push(<br key={componentList.length} />);
    for (let i = 0; i < props.array2.length; i++) {
        if (i === props.array2.length-1)
            componentList.push(<Element key={componentList.length} value={props.array2[i]} border="bordered" />);
        else
            componentList.push(<Element key={componentList.length} value={props.array2[i]} />);
    }
    if (props.array2.length === 0)
        componentList.push(<Element key={componentList.length} color="none" />);
    return componentList;
}
const MergeSortDisplayRowHelper2 = (props) => {
    var componentList = [];
    componentList.push(<p className="arrow" key={0}>&#x2192;</p>);
    for (let i = 0; i < props.array.length; i++)
        componentList.push(<Element key={componentList.length} color="green" value={props.array[i]} />);
    return componentList;
}

//react component for merge sort
const MergeSort = () => {

    const [, forceRender] = useState(0);
    const arrays = useRef([[]]);
    const mergedArrays = useRef([[]]);
    const [sorted, setSorted] = useState(false);
    const merged = useRef(false);
    const sorting = useRef(false);
    const interval = useRef(null);
    const arraySizeInput = useRef();
    const toggleSortingButton = useRef();
    const speedSlider = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //sets state array to a random array for sorting
    const generateArrays = () => {
        if (sorting.current) {
            toggleSorting();
        }
        const size = parseInt(arraySizeInput.current.value);
        if (!isNaN(size) && size > 0) {
            arrays.current = randomArrays(size);
            setSorted(false);
            merged.current = false;
            initializeMergedArrays();
            forceUpdate();
        }
        arraySizeInput.current.value = null;
    }
    //generates a random array within reasonable bounds
    const randomArrays = useCallback((size) => {
        var newArrays = new Array(size);
            for (let i = 0; i < size; i++) {
                newArrays[i] = [randInt(-999, 1000)];
            }
        return newArrays;
    }, []);
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //initialize the arrays randomly
    useEffect(() => {
        arrays.current = randomArrays(randInt(5,20));
        initializeMergedArrays();
        forceUpdate();
    }, [randomArrays]);

    //function to initialize list of empty arrays to be merged into
    const initializeMergedArrays = () => {
        mergedArrays.current = [];
        const length = Math.ceil(arrays.current.length/2);
        for (let i = 0; i < length; i++)
            mergedArrays.current.push([]);
    }

    //function to do a single step of merge sorting
    const sortingStep = () => {
        if(!merged.current) {
            //find the index of a row that still needs merging
            var mergeRowIndex = null;
            for (let i = 0; i < arrays.current.length; i++) {
                if (arrays.current[i].length !== 0) {
                    mergeRowIndex = Math.floor(i/2);
                    break;
                }
            }
            //if no rows found that still need to merge set merged to true
            if (mergeRowIndex === null) {
                merged.current = true;
                return;
            }
            //perform 1 merge operation for the found row
            var array1 = arrays.current[2*mergeRowIndex];
            var array2 = [];
            if (2*mergeRowIndex+1 < arrays.current.length)
                array2 = arrays.current[2*mergeRowIndex+1];
            //if either array is empty concatenate the other to the merged array
            if (array1.length === 0) {
                mergedArrays.current[mergeRowIndex] = array2.concat(mergedArrays.current[mergeRowIndex]);
                arrays.current[2*mergeRowIndex+1] = [];
            } else if (array2.length === 0) {
                mergedArrays.current[mergeRowIndex] = array1.concat(mergedArrays.current[mergeRowIndex]);
                arrays.current[2*mergeRowIndex] = [];
            //add the max of the last elements to the merged array
            } else {
                if (array1[array1.length-1] >= array2[array2.length-1]) {
                    mergedArrays.current[mergeRowIndex].unshift(array1[array1.length-1]);
                    arrays.current[2*mergeRowIndex].pop();
                } else {
                    mergedArrays.current[mergeRowIndex].unshift(array2[array2.length-1]);
                    arrays.current[2*mergeRowIndex+1].pop();
                }
            }
        } else {
            if (mergedArrays.current.length === 1) {
                setSorted(true);
                toggleSorting();
                return;
            }
            arrays.current = mergedArrays.current;
            initializeMergedArrays();
            merged.current = false;
        }
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
                forceUpdate();
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
                forceUpdate();
            }, 1000-speedSlider.current.value);
        }
    }

    return (
        <div className="merge-sort">
            <div className="controls">
                <button id="randomButton" onClick={generateArrays}>Random</button>
                <span className="labeledInput">
                    <label>Array Size</label>
                    <input id="arraySizeInput" ref={arraySizeInput} type="text"></input>
                </span>
                <br />
                <button ref={toggleSortingButton} className="greenButton" onClick={toggleSorting}>Sort</button>
                <br />
                <span className="labeledSlider">
                    <label>Animation Speed</label>
                    <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                </span>
            </div>
            <div className="visualization">
                <MergeSortDisplay arrays={arrays.current} mergedArrays={mergedArrays.current} />
            </div>
        </div>
    );
}

export default MergeSort;