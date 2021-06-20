'use strict';

class Sort extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div >
                <h1 style={{textAlign: "center" }}>{this.props.left}</h1>
                <h2 style={{ textAlign: "center" }}>{this.props.right}</h2>
            </div>
        );
    }
}
//function Sort(props) {
//    return <div>
//        <h1>This will be sorted {props.left}</h1>
//        <h2>This is sorted: {props.right}</h2>
//        </div>
//}



let domContainer = document.querySelector('#sort_container');
ReactDOM.render(<Sort left="HELLO" right= "EHLLO"/>, domContainer);
