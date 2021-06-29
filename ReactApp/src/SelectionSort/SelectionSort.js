import React, { useState, useRef } from 'react';
import './SelectionSort.scss';
import Element from '../Element/Element';

const SelectionSortDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index < props.sortedEndIndex)
            return <Element key={index} value={value} color="green" />
        if (index === props.currentMinimum && index === props.currentFocus)
            return <Element key={index} value={value} color="pink" border="bordered" />
        if (index === props.currentMinimum)
            return <Element key={index} value={value} color="pink" />
        if (index === props.currentFocus)
            return <Element key={index} value={value} border="bordered" />
        return <Element key={index} value={value} />
    });
}

const SelectionSort = () => {

    const [, forceRender] = useState(0);
    const [array,] = useState([3,7,2,-3,0,22,5,1,-8,9]);
    const sorting = useRef(false);
    const interval = useRef(null);
    const sortedEndIndex = useRef(0);
    const currentFocus = useRef(-1);
    const currentMinimum = useRef(-1);
    const toggleSortingButton = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //completes one step of the sorting algorithm
    const sortingStep = () => {
        if (sortedEndIndex.current === array.length) {
            return;
        }
        if (currentFocus.current === array.length-1) {
            var temp = array[sortedEndIndex.current];
            array[sortedEndIndex.current] = array[currentMinimum.current];
            array[currentMinimum.current] = temp;
            sortedEndIndex.current += 1;
            currentFocus.current = sortedEndIndex.current-1;
            currentMinimum.current = -1;
            return;
        }
        currentFocus.current += 1;
        if (currentMinimum.current === -1) {
            currentMinimum.current = currentFocus.current;
        } else if (array[currentMinimum.current] > array[currentFocus.current]) {
            currentMinimum.current = currentFocus.current;
        }
    }

    //function to turn sorting on and off by button click
    const toggleSorting = () => {
        if (sorting.current) {
            clearInterval(interval.current);
            sorting.current = false;
            toggleSortingButton.current.innerHTML = "Start";
        } else {
            interval.current = setInterval(() => {
                sortingStep();
                forceUpdate();
            }, 100);
            sorting.current = true;
            toggleSortingButton.current.innerHTML = "Stop";
        }
    }

    return (
        <div className="selection-sort">
            <div className="controls">
                <button ref={toggleSortingButton} onClick={toggleSorting}>Start</button>
            </div>
            <div className="visualization">
                <SelectionSortDisplay array={array} sortedEndIndex={sortedEndIndex.current} currentFocus = {currentFocus.current} currentMinimum={currentMinimum.current} />
            </div>
        </div>
    );
}

export default SelectionSort;