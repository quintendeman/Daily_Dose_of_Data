import React from 'react';

const SelectionSortInformation = () => {
    return (
        <div className="information">
            <h1>Selection Sort</h1>
            <p>Selection sort is an algorithm to sort an array that repeatedly finds the minimum value of the unsorted elements. Two subarrays are kept. At the beginning of the array is a subarray of elements that have been already been selected as the minimum and are placed in their correct position in the sorted array. The rest of the array is the remaining unsorted elements.</p>
            <br />
            <p>The algorithm repeatedly finds the minimum value of the unsorted subarray, and swaps it with the first element of the unsorted portion. That element is then considered sorted, so the sorted subarray grows in size, and the unsorted subarray decreases in size. This is repeated until the sorted portion of the array becomes as large as the entire array.</p>
            <br />
            <p>To find the minimum element of the unsorted subarray, a linear scan is used where the smallest element is kept track of. Then the minimum can be swapped with the beginning in costant time. The linear scan portion takes n comparisons the first time, n-1 comparisons the second time, and so on until there is 1 comparison on the last scan. Because of this the overall complexity is O(n<sup>2</sup>).</p>
            <br />
            <table>
                <tbody>
                    <tr><th>Algorithm</th><th>Complexity</th></tr>
                    <tr><td>Selection Sort</td><td>O(n<sup>2</sup>)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default SelectionSortInformation;