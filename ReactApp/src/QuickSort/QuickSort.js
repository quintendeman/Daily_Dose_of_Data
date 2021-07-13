import React, { useState, useRef, useEffect, useCallback } from 'react';
import './QuickSort.scss';
import Element from '../Element/Element';

//const PartitionDisplay = (props) => {
//    var finalArray = props.array.map((value, index) => {
//        if (index === props.low.current || index === props.high.current)
//            return <Element key={index} value={value} border="bordered" color={index === props.low.current ? "pink" : "green"} />
//        else if (index === props.pivot.current)
//            return <Element key={index} value={value} color="yellow" />
//        else
//            return <Element key={index} value={value} />
//    });
//    //if (props.array.length <= 1) { 
//    //    finalArray = props.array.map((value, index) => {
//    //        console.log("sorted element $value");
//    //        return <Element key={index} value={value} color="green"/>
//    //    });
//    //}
//    return finalArray;
//}

////takes array
//const Partition = (props) => {
//    const [, forceRender] = useState(0);
//    const [array, setArray] = useState(props.array);
//    const [sorted, setSorted] = useState(false);
//    //const sorted = useRef();
//    const pivot = useRef(array.length - 1);
//    const low = useRef(0);
//    const high = useRef(array.length - 2);

//    //const sorting = useRef(false);
//    const interval = useRef(null);

//    function swap(arr, x, y) {
//        var temp = arr[x];
//        arr[x] = arr[y];
//        arr[y] = temp;
//    }

//    useEffect(() => {
//        clearInterval(interval.current);
//        if (low.current !== null) {
//            interval.current = setInterval(() => {
//                if (props.sorting) {
//                    sortingStep();
//                    //forceUpdate();
//                }
//            }, 2000);
//        }
//    });


//    //We call update on fake state variable to force rerender
//    const forceUpdate = () => {
//        forceRender(renders => renders + 1);
//    }

//    //completes one step of the sorting algorithm
//    const sortingStep = () => {

//        if (!sorted) {
//            if (low.current === -1) {
//                setSorted(true);
//                return;
//            }
//            else if (low.current > high.current) {
//                var toInsert = array.pop();
//                array.splice(low.current, 0, toInsert);
//                pivot.current = low.current;
//                low.current = -1;
//                high.current = -1;
//                setSorted(true);


//            }
//            else if (array[low.current] >= array[pivot.current] || pivot.current - low.current === 1) {
//                if (array[high.current] <= array[pivot.current]) {
//                    swap(array, low.current, high.current);
//                }
//                else high.current--;
//            }
//            else low.current++;

//            props.nextPartitions.current.push(array);
//        }
//        else {
//            console.log(pivot.current);
//            console.log(array.slice(0, pivot.current));
//            props.nextPartitions.current.push(array.slice(0, pivot.current));
//            props.nextPartitions.current.push(array.slice(pivot.current, pivot.current + 1));
//            props.nextPartitions.current.push(array.slice(pivot.current + 1));
//            low.current = null;
//            setSorted(false);
            
//            //console.log(array);
//            //console.log(array.slice[pivot.current, pivot.current + 1]);
//            //console.log(array.slice[pivot.current + 1]);
//        }
//        if (props.index === props.partitions.current.length - 1) {
//            props.partitions.current = props.nextPartitions.current;
//            props.nextPartitions.current = [];


//            //
//            //low.current = -1;
            
//            //console.log(props.partitions.current);
//        }
        
//        forceUpdate();
//        console.log(props.partitions.current);
        
//    }

//    const sort = () => {
//        if (props.sorting && !sorted) {
//            interval.current = setInterval(() => {
//                sortingStep();
//                forceUpdate();
//            }, 100);
//        }
//    }

    



//    return (
//        <div >
//            <PartitionDisplay array={array} low={low} high={high} pivot={pivot} />
//        </div>
//        );

//}

//const QuickSortDisplay = (props) => {
//    const [, forceRender] = useState(0);
//    const [size, setSize] = useState(props.partitions.current.length);
//    const interval = useRef(null);
//    const forceUpdate = () => {
//        forceRender(renders => renders + 1);
//    }
//    useEffect(() => {
//        clearInterval(interval.current);
//        interval.current = setInterval(() => {
//            //console.log(props.partitions.current);
//            setSize(props.partitions.current.length);
//        }, 100);
//    });
    
//    return props.partitions.current.map((value, index) => {
//        console.log(`rendering ${value}`);
//        return <Partition sorting={props.sorting} array={value} key={index} index={index} partitions={props.partitions} nextPartitions={props.nextPartitions} />;
//    });

//}

//const QuickSort = () => {

//    const [sorting, setSorting] = useState(false);
//    const toggleSortingButton = useRef();
//    const [sorted, setSorted] = useState(false);
//    const partitions = useRef([[2, 4, 3]]);
//    //2, 3, 5, 7, 6, 4
//    //, [5, 7, 6], [6]
//    const nextPartitions = useRef([]);
    

    
//    useEffect(() => {
//        //clearInterval(interval.current);
        
//    });



//    //function to turn sorting on and off by button click
//    const toggleSorting = () => {
//        if (sorting) {
//            //clearInterval(interval.current);
//            setSorting(!sorting);
//            toggleSortingButton.current.innerHTML = "Sort";
//            toggleSortingButton.current.classList.remove("pinkButton");
//            toggleSortingButton.current.classList.add("greenButton");
//        } else if (!sorted) { 
//            setSorting(!sorting);
//            toggleSortingButton.current.innerHTML = "Stop";
//            toggleSortingButton.current.classList.remove("greenButton");
//            toggleSortingButton.current.classList.add("pinkButton");
//        }
//    }



//    return (
//        <div className="quick-sort">
//            <div id="main">
//        <div className="controls">
//                    <br />
//                    <button id="toggleSortingButton" ref={toggleSortingButton} className="greenButton" onClick={toggleSorting}>Sort</button>
            
//                </div>
//                <QuickSortDisplay sorting={sorting} partitions={partitions} nextPartitions={nextPartitions} />
//                </div>
//            </div>);
//}

const QuickSortDisplay = (props) => {
    return props.array.map((value, index) => {
        if (index === props.pivot.current)
            return <Element key={index} value={value} color="purple" />
        if (index === props.low.current && index === props.high.current)
            return <Element key={index} value={value} border="bordered" color="yellow" />
        if (index === props.low.current)
            return <Element key={index} value={value} border="bordered" color="pink" />
        if (index === props.high.current)
            return <Element key={index} value={value} border="bordered" color="green" />
        if (props.sortedElements.current.includes(index))
            return <Element key={index} value={value} color="green" />
        else return <Element key={index} value={value} />
    });
}


const QuickSort = () => {
    const [, forceRender] = useState(0);
    const [array, setArray] = useState([]);
    const interval = useRef(null);
    const sorting = useRef(false);
    const [sorted, setSorted] = useState(false);
    const toggleSortingButton = useRef();
    const generateArrayButton = useRef();
    const arraySizeInput = useRef();
    const speedSlider = useRef();

    const sortedElements = useRef([]);
    const worklist = useRef([]);
    const low = useRef(-1);
    const high = useRef(-1);
    const pivot = useRef(-1);


    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    function swap(arr, x, y) {
        var temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

    const sortingStep = () => {
        
        if (array.length === 1) {
            sortedElements.current.push(0);
        }
        if (pivot.current === -1) {
            //initial step
            if (sortedElements.current.length === 0) {
                pivot.current = array.length - 1;
                low.current = 0;
                high.current = array.length - 2;
            }
            else {
                low.current = worklist.current.shift();
                pivot.current = worklist.current.shift();
                if (!sortedElements.current.includes(pivot.current - 1)) high.current = pivot.current - 1;

                if (pivot.current === 0) {
                    sortedElements.current.push(pivot.current);
                    low.current = -1;
                    pivot.current = -1;
                    high.current = -1;
                }
            }
        }
        else {
            if (pivot.current === 0) {
                sortedElements.current.push(pivot.current);
            }
            else if (low.current > high.current) {
                var toInsert = array[pivot.current];
                array.splice(pivot.current, 1);
                array.splice(low.current, 0, toInsert);
                sortedElements.current.push(low.current);
                //worklist.current = worklist.current.map((value, index) => {
                //    if (value > low.current) return value + 1;
                //    else return;
                //})

                if (low.current !== 0) {
                    //find low partition
                    var temp = sortedElements.current.filter(n => n < low.current);
                    
                    if (temp.length === 0) {


                        
                        worklist.current.push(0);
                        worklist.current.push(low.current - 1);
                    }
                    else {
                        if (Math.max(...temp) !== low.current - 1) {
                            worklist.current.push(Math.max(...temp) + 1);
                            worklist.current.push(low.current - 1);
                        }
                    }
                }
                //find high bound
                if (low.current !== array.length - 1) {
                    var temp = sortedElements.current.filter(n => n > low.current);
                    if (temp.length === 0) {
                        worklist.current.push(low.current + 1);
                        worklist.current.push(array.length - 1);
                    }
                    else {
                        if (Math.min(...temp) !== low.current + 1) {
                            worklist.current.push(low.current + 1);
                            worklist.current.push(Math.min(...temp) - 1);
                        }
                    }

                    
                }

                low.current = -1;
                pivot.current = -1;
                high.current = -1;

            }
            else if (array[low.current] > array[pivot.current]) {
                if (array[high.current] < array[pivot.current]) {
                    swap(array, low.current, high.current);
                }
                else high.current--;
            }
            else low.current++;
        }
        console.log(worklist.current);
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
            }, 1000 - speedSlider.current.value);
            sorting.current = true;
            toggleSortingButton.current.innerHTML = "Stop";
            toggleSortingButton.current.classList.remove("greenButton");
            toggleSortingButton.current.classList.add("pinkButton");
        }
    }

    //sets state array to a random array for sorting
    const generateArray = () => {
        if (sorting.current) {
            toggleSorting();
        }
        const size = parseInt(arraySizeInput.current.value);
        if (!isNaN(size) && size > 0) {
            setArray(randomArray(size));
            setSorted(false);

            pivot.current = -1;
            low.current = -1;
            high.current = -1;
            sortedElements.current = [];
            
        }
        
        arraySizeInput.current.value = null;
    }
    //generates a random array within reasonable bounds
    const randomArray = useCallback((size) => {
        var newArray = new Array(size);
        for (let i = 0; i < size; i++) {
            newArray[i] = randInt(-999, 1000);
        }
        return newArray;
    }, []);
    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //initialize the array randomly at start
    useEffect(() => {
        setArray(randomArray(randInt(5, 50)));
    }, [randomArray]);

    //changes the animation speed of sorting when the slider changes
    const updateSpeed = () => {
        if (sorting.current) {
            clearInterval(interval.current);
            interval.current = setInterval(() => {
                sortingStep();
                forceUpdate();
            }, 1000 - speedSlider.current.value);
        }
    }


    return (
        <div className="quick-sort">
            <div id="main">
                <div className="controls">
                    <button id="generateArrayButton" ref={generateArrayButton} onClick={generateArray}>Random</button>
                    <span className="labeledInput">
                        <label>Array Size</label>
                        <input id="arraySizeInput" ref={arraySizeInput} type="text"></input>
                    </span>
                    <br />
                    <button id="toggleSortingButton" className="greenButton" ref={toggleSortingButton} onClick={toggleSorting}>Sort</button>
                    <br />
                    <span className="labeledSlider">
                        <label>Animation Speed</label>
                        <input className="slider" ref={speedSlider} onChange={updateSpeed} min="0" max="990" type="range"></input>
                    </span>
                </div>
                <div className="visualization">
                    <QuickSortDisplay array={array} low={low} high={high} pivot={pivot} sortedElements={sortedElements} />
                </div>
            </div>
        </div>
        );
}




export default QuickSort;