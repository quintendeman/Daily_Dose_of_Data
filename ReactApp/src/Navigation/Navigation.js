import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import NavigationSection from './NavigationSection';

const Navigation = () => {

    return (
        <div className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><NavigationSection title={"Data Structures"} list={["List", "Stack", "Queue", "Array", "Linked List"]} /></li>
                <li><NavigationSection title={"Algorithms"} list={["Insertion Sort", "Selection Sort", "Bubble Sort", "Merge Sort", "Quick Sort"]} /></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </div>
    );
    
}

export default Navigation