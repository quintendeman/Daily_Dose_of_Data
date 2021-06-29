import React, { useState, useRef } from 'react';
import './LinkedList.scss';
import Element from '../Element/Element';


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListClass {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    insert(data) {
        if (this.head == null) {
            this.head = new Node(data);
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new Node(data);
        }
        this.size++;
    }

    insertAt(data, index) {
        var newNode = new Node(data);
        var current = this.head;
        var previous;

        if (index <= this.size) {

            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                var i = 0;
                while (i < index) {
                    i++;
                    previous = current;
                    current = current.next;
                }
                newNode.next = current;
                previous.next = newNode;
            }
            this.size++;
        }
    }

    get(index) {
        var i = 0;
        var current = this.head;
        while (i != index) {
            current = current.next;
            i++;
        }
        return current.value;
    }
}

const LinkedListDisplay = (props) => {
    var current = props.list.head;
    var index = 0;
    var componentList = [];
    while (current != null) {
        componentList.push(<Element key={index} value={current.value} />);
        current = current.next;
        index++;
        componentList.push(<p key={index}>&#x2192;</p>);
        index++;
    }
    componentList.push(<Element key={index} value="null" />);
    return componentList;

    
}

const LinkedList = () => {

    const [list,] = useState(new LinkedListClass());
    const [, forceRender] = useState(0);
    const insertIndex = useRef();
    const insertValue = useRef();
    const removeIndex = useRef();
    const listOutput = useRef();
    const getIndex = useRef();

    //We call update on fake state variable to force rerender
    const forceUpdate = () => {
        forceRender(renders => renders + 1);
    }

    //insertion only occurs at head for now
    function insert() {
        const data = parseInt(insertValue.current.value);
        const index = parseInt(insertIndex.current.value);
        if (!isNaN(data)) {
            list.insertAt(data, index);
            forceUpdate();
        }
        insertValue.current.value = null;
        insertIndex.current.value = null;
        
    }

    function get() {
        const index = parseInt(getIndex.current.value);
        if (index < list.size) {
            listOutput.current.value = list.get(index);
        }
    }


    return (
        <div className="linked-list">

            <div className="controls">
                <button id="insertButton" onClick={insert}>Insert</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="insertIndex" ref={insertIndex} type="text"></input>
                </span>
                <span className="labeledInput">
                    <label>Value</label>
                    <input id="insertValue" ref={insertValue} type="text"></input>
                </span>
                <br />
                <button id="removeButton" >Remove</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="removeIndex" ref={removeIndex} type="text"></input>
                </span>
                <br />
                <input id="listOutput" type="text" ref={listOutput} readOnly></input>
                <br />
                <button id="getButton" onClick={get} >Get</button>
                <span className="labeledInput">
                    <label>Index</label>
                    <input id="getIndex" ref={getIndex} type="text"></input>
                </span>
            </div>

            <div className="visualization">
                <LinkedListDisplay list={list} />
            </div>
        </div>
        
        );
}

export default LinkedList