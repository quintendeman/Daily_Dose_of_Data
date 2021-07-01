import React, { useState, useRef } from 'react';
import './InsertionSort.scss';
import Element from '../Element/Element';


const SelectionSortDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index === props.currentCompare && index === props.currentFocus)
            return <Element key={index} value={value} color="pink" border="bordered" />

        if (index === props.currentCompare)
            return <Element key={index} value={value} color="green" border="bordered" />

        
        if (index < props.sortedEndIndex)
            return <Element key={index} value={value} color="green" />


        if (index === props.currentFocus)
            return <Element key={index} value={value} color="pink" />
        return <Element key={index} value={value} />
    });
}

const InsertionSort = () => {

    const [, forceRender] = useState(0);
    const [array,] = useState([3, 7, 2, -3, 0, 22, 5, 1, -8, 9]);
    const sorting = useRef(false);
    const interval = useRef(null);
    const sortedEndIndex = useRef(1);
    const currentFocus = useRef(0);
    const currentCompare = useRef(0);
    const toggleSortingButton = useRef();


    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    //completes one step of the sorting algorithm
    const sortingStep = () => {

        if (sortedEndIndex.current === array.length) {
            currentCompare.current = -1;
            currentFocus.current = -1;
            return;
        }
        if (array[currentCompare.current] < array[currentFocus.current]) {
            var temp = array[currentFocus.current];
            for (var i = currentFocus.current - 1; i > currentCompare.current; i--) {
                array[i + 1] = array[i];
            }
            array[currentCompare.current + 1] = temp;
            currentFocus.current++;
            currentCompare.current = currentFocus.current + 1;
            sortedEndIndex.current++;

        }
        if (currentCompare.current === 0) {
            if (array[currentCompare.current] > array[currentFocus.current]) {
                var temp = array[currentFocus.current];
                for (var i = currentFocus.current - 1; i >= currentCompare.current; i--) {
                    array[i + 1] = array[i];
                }
                array[currentCompare.current] = temp;
                currentFocus.current++;
                currentCompare.current = currentFocus.current + 1;
                sortedEndIndex.current++;
            }
            else {
                currentFocus.current++;
                currentCompare.current = currentFocus.current;
            }
        }
       
        currentCompare.current--;

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
            }, 200);
            sorting.current = true;
            toggleSortingButton.current.innerHTML = "Stop";
        }
    }


    return (
        <div className="insertion-sort">
            <div className="controls">
                <button ref={toggleSortingButton} onClick={toggleSorting}>Start</button>
            </div>
            <div className="visualization">
                <SelectionSortDisplay array={array} sortedEndIndex={sortedEndIndex.current} currentFocus={currentFocus.current} currentCompare={currentCompare.current} />
            </div>
        </div>
        );
}

export default InsertionSort;