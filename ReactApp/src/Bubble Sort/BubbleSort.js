import React, { useState, useRef } from 'react';
import './BubbleSort.scss';
import Element from '../Element/Element';

const BubbleSortDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index > props.sortedStart.current) {
            return <Element key={index} value={value} color="green"/>
        }
        if (index === props.focusOne.current || index === props.focusTwo.current) {
            if (index === props.min.current) {
                return <Element key={index} value={value} color="pink" border="bordered" />
            }
            if (index === props.max.current) {
                return <Element key={index} value={value} color="green" border="bordered" />
            }
            else return <Element key={index} value={value} border="bordered" />
            
        }
        return <Element key={index} value={value} />
    });
}



const BubbleSort = () => {
    const [, forceRender] = useState(0);
    const [array,] = useState([3, 7, 2, -3, 0, 22, 5, 1, -8, 9]);
    const sorting = useRef(false);
    const interval = useRef(null);
    const swappedOnPass = useRef(false);
    const sortedStart = useRef(array.length - 1);
    const focusOne = useRef(0);
    const focusTwo = useRef(1);
    const min = useRef(-1);
    const max = useRef(-1);
    const toggleSortingButton = useRef();
    
    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    function swap(arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    //completes one step of the sorting algorithm
    const sortingStep = () => {
        if (sortedStart.current <= 0) return;
        if (max.current === sortedStart.current) {
            if (swappedOnPass.current === false) {
                sortedStart.current = -1;
            }

            min.current = -1;
            max.current = -1;
            focusOne.current = 0;
            focusTwo.current = 1;
            swappedOnPass.current = false;
            sortedStart.current--;
        }
        if (min.current === -1) {
            if (array[focusOne.current] < array[focusTwo.current]) {
                min.current = focusOne.current;
                max.current = focusTwo.current;
            }
            else {
                min.current = focusTwo.current;
                max.current = focusOne.current;
            }
        }
        else if (min.current > max.current) {
            swap(array, min.current, max.current);
            swappedOnPass.current = true;
            var temp = max.current;
            max.current = min.current;
            min.current = temp;

        } 
        else {
            min.current = -1;
            max.current = -1;
            focusOne.current++;
            focusTwo.current++;
        }
    }

    //function to turn sorting on and off by button click
    const toggleSorting = () => {
        if (sorting.current) {
            clearInterval(interval.current);
            sorting.current = false;
            toggleSortingButton.current.innerHTML = "Start";
        }
        else {
            interval.current = setInterval(() => {
                sortingStep();
                forceUpdate();
            }, 100);
            sorting.current = true;
            toggleSortingButton.current.innerHTML = "Stop";
        }
    }

    return (
        <div className="bubble-sort">
            <div className="controls">
                <button ref={toggleSortingButton} onClick={toggleSorting}>Start</button>
            </div>
            <div className="visualization">
                <BubbleSortDisplay array={array} sortedStart={sortedStart} focusOne={focusOne} focusTwo={focusTwo} min={min} max={max}/>
            </div>
        </div>);
}

export default BubbleSort;