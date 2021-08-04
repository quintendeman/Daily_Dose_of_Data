import React from 'react';

const AvlTreeInformation = () => {
    return (
        <div className="information">
            <h1>AVL Tree</h1>
            <p>An AVL Tree is a self-balancing binary search tree. Thus, it inherits the properties of order as well as the restriction that each node has either zero, one, or two children. The additional restriction placed on AVL Trees is that the height of two sibling subtrees differ by at most one. It maintains this condition by performing a series of rotational operations on nodes following insertion and deletion.</p>
            
            <br />
            <p><u>An AVL Tree has the following basic operations:</u></p>
            <ul>
                <li><b>Insert:</b> inserts an element into tree</li>
                <li><b>Remove:</b> removes an element from the tree</li>
                <li><b>Find:</b> searches for an element in the tree</li>
            </ul>
            <br />
            <p>At insertion, a regular BST insertion is performed. Next, if there is an unbalanced node found on the path up from the newly inserted node to the root, then a rotation will occur. The exact rotation operation depeneds on the relative postions of the first unbalanced node and its two immediate adjacent ancestors on the path back to the newly inserted node.</p>
            <br />
            <p>Likewise, at deletion, a regular BST deletion is performed and a rotation may also occur. However, whether or not the rotation occurs and the exact rotation operation depends instead on the relative positions of the first unbalanced node on the path up the tree as well as its two immediate ancestors that are each the largest height child of their parent node.</p>
            <br />
            <p>As a consequence of an AVL Tree maintaining its balance. It accels over a traditional Binary Search Tree by improving the worst case time complexities for each basic operation </p>
            <br />
            <table>
                <tbody>
                    <tr><th>Operation</th><th>Worst-Case</th><th>Average-Case</th><th>BST Worst-Case</th></tr>
                    <tr><td>Insert</td><td>O(log n)</td><td>O(log n)</td><td>O(n)</td></tr>
                    <tr><td>Remove</td><td>O(log n)</td><td>O(log n)</td><td>O(n)</td></tr>
                    <tr><td>Find</td><td>O(log n)</td><td>O(log n)</td><td>O(n)</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default AvlTreeInformation;