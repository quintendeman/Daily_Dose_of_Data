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
    const [array, setArray] = useState([]);
    const [sorted, setSorted] = useState(false);
    const sorting = useRef(false);
    const interval = useRef(null);
    const sortedEndIndex = useRef(0);
    const currentFocus = useRef(-1);
    const currentMinimum = useRef(-1);
    const toggleSortingButton = useRef();
    const generateArrayButton = useRef();
    const arraySizeInput = useRef();
    const speedSlider = useRef();

    //We call update on fake state variable to force rerender
	const forceUpdate = () => {
		forceRender(renders => renders+1);
	}

    //initializes a random array for sorting
    const generateArray = () => {
        if (sorting.current) {
            toggleSorting();
        }
        const size = parseInt(arraySizeInput.current.value);
        if (!isNaN(size) && size > 0) {
            var newArray = new Array(size);
            for (let i = 0; i < size; i++) {
                newArray[i] = randInt(-999,1000);
            }
            setArray(newArray);
            setSorted(false);
            sortedEndIndex.current = 0;
            currentFocus.current = -1;
            currentMinimum.current = -1;
        }
        arraySizeInput.current.value = null;
    }
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    //completes one step of the sorting algorithm
    const sortingStep = () => {
        if (sortedEndIndex.current === array.length) {
            setSorted(true);
            toggleSorting();
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

    return (
        <div className="selection-sort">
            <div id="main">
                <div className="controls">
                    <button id="generateArrayButton" ref={generateArrayButton} onClick={generateArray}>Random</button>
                    <input id="arraySizeInput" ref={arraySizeInput} type="text"></input>
                    <br />
                    <button id="toggleSortingButton" className="greenButton" ref={toggleSortingButton} onClick={toggleSorting}>Sort</button>
                    <br />
                    <input className="slider" ref={speedSlider} min="0" max="990" type="range"></input>
                </div>
                <div className="visualization">
                    <SelectionSortDisplay array={array} sortedEndIndex={sortedEndIndex.current} currentFocus={currentFocus.current} currentMinimum={currentMinimum.current} />
                </div>
            </div>
            <div id="legend">
                <Element color="green"></Element>
                <p>= Sorted</p>
                < br />
                <Element></Element>
                <p>= Unsorted</p>
                <br />
                <Element color="pink"></Element>
                <p>= Current Minimum</p>
                <br />
                <Element border="bordered"></Element>
                <p>= Current Focus</p>
            </div>
        </div>
    );
}

export default SelectionSort;