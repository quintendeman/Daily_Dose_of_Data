'use strict';

class Sort extends React.Component {
    constructor() {
        super()
        this.left = "left"
        this.right = "right"
    }

    render() {
        return (
            <div >
                <p>This is left: {this.left}</p>
                <p>This is right: {this.right}</p>
            </div>
        );
    }
}

let domContainer = document.querySelector('#sort_container');
ReactDOM.render(<Sort />, domContainer);
