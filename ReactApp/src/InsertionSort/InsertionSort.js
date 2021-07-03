import React, { useState, useRef } from 'react';
import './InsertionSort.scss';
import Element from '../Element/Element';


const InsertionSortDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index === props.currentCompare && index === props.currentInserting)
            return <Element key={index} value={value} color="yellow" border="bordered" />

        if (index === props.currentCompare)
            return <Element key={index} value={value} color="green" border="bordered" />

        if (index === props.currentInserting)
            return <Element key={index} value={value} color="yellow" />

        if (index < props.sortedEndIndex)
            return <Element key={index} value={value} color="green" />

        return <Element key={index} value={value} />
    });
}

const InsertionSort = () => {

    const [, forceRender] = useState(0);
    const [array,] = useState([3, 1, 2, -3, 0, 22, 5, 1, -8, 9]);
    const sorting = useRef(false);
    const interval = useRef(null);
    const sortedEndIndex = useRef(-1);
    const currentInserting = useRef(-1);
    const currentCompare = useRef(-1);
    const toggleSortingButton = useRef();


    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    //completes one step of the sorting algorithm
    const sortingStep = () => {
        
        if (sortedEndIndex.current === array.length+1) {
            currentCompare.current = -1;
            currentInserting.current = -1;
        }
        //if found lower element, insert current after that, restart process
        else if (array[currentCompare.current] < array[currentInserting.current]) {
            let temp = array[currentInserting.current];
            for (let i = currentInserting.current - 1; i > currentCompare.current; i--) {
                array[i + 1] = array[i];
            }
            array[currentCompare.current + 1] = temp;
            currentInserting.current++;
            currentCompare.current = currentInserting.current;
            sortedEndIndex.current++;
        }
        //if at end of sorted and none lower found, insert at beginning, restart process
        else if (currentCompare.current === 0) {
            let temp = array[currentInserting.current];
            for (let i = currentInserting.current - 1; i >= currentCompare.current; i--) {
                array[i + 1] = array[i];
            }
            array[currentCompare.current] = temp;
            currentInserting.current++;
            currentCompare.current = currentInserting.current;
            sortedEndIndex.current++;
        }
        else if (currentInserting.current === -1) {
            currentInserting.current++;
            sortedEndIndex.current = 1;
            currentCompare.current = currentInserting.current;
        }
        else {
            currentCompare.current--;
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
            }, 500);
            sorting.current = true;
            toggleSortingButton.current.innerHTML = "Stop";
        }
    }


    return (
        <div className="insertion-sort">
            <div id="main">
                <div className="controls">
                    <button ref={toggleSortingButton} onClick={toggleSorting}>Start</button>
                </div>
                <div className="visualization">
                    <InsertionSortDisplay array={array} sortedEndIndex={sortedEndIndex.current} currentInserting={currentInserting.current} currentCompare={currentCompare.current} />
                </div>
            </div>
            <div className="legend">
                <Element color="green"></Element>
                <p>= Sorted</p>
                < br />
                <Element></Element>
                <p>= Unsorted</p>
                <br />
                <Element color="yellow"></Element>
                <p>= Current Element to be Inserted</p>
                <br />
                <Element color="green" border="bordered"></Element>
                <p>= Current Focus</p>
            </div>
        </div>
        );
}

export default InsertionSort;