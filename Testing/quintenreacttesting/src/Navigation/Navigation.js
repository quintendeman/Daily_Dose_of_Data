import React from 'react';
import './Navigation.scss';
import NavigationSection from './NavigationSection'

const Navigation = () => {

    return (
        <div className="navigation">
            <ul>
                <li><p>Home</p></li>
                <li><NavigationSection title={"Data Structures"} list={["List", "Stack", "Queue"]} /></li>
                <li><NavigationSection title={"Algorithms"} list={["Insertion Sort", "Selection Sort", "Bubble Sort", "Merge Sort", "Quicksort"]} /></li>
                <li><p>About Us</p></li>
            </ul>
        </div>
    );
    
}

export default Navigation