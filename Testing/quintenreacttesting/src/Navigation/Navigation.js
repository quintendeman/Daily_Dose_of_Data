import React from 'react';
import './Navigation.scss';

const Navigation = () => {

    return (
        <div className="navigation">
            <ul>
                <li>Home</li>
                <li>Data Structures
                    <ul>
                        <li>List</li>
                        <li>Stack</li>
                        <li>Queue</li>
                    </ul>
                </li>
                <li>Algorithms
                    <ul>
                        <li>Insertion Sort</li>
                        <li>Selection Sort</li>
                        <li>Bubble Sort</li>
                        <li>Merge Sort</li>
                        <li>Quick Sort</li>
                    </ul>
                </li>
                <li>About Us</li>
            </ul>
        </div>
    );
    
}

export default Navigation