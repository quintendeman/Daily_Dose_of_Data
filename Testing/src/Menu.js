'use strict';

class Menu extends React.Component {
    
    render() {
        return (
            <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Data Structures</a>
                    <ul>
                        <li>List</li>
                        <li>Stack</li>
                        <li>Queue</li>
                    </ul>
                </li>
                <li><a href="#">Algorithms</a>
                    <ul>
                        <li>Insertion Sort</li>
                        <li>Selection Sort</li>
                        <li>Bubble Sort</li>
                        <li>Merge Sort</li>
                        <li>Quick Sort</li>
                    </ul>
                </li>
            </ul>
        </nav>);
    }
}

let domContainer = document.querySelector('#menu_container');
ReactDOM.render(<Menu />, domContainer);