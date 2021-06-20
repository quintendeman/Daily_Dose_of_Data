'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sort = function (_React$Component) {
    _inherits(Sort, _React$Component);

    function Sort() {
        _classCallCheck(this, Sort);

        return _possibleConstructorReturn(this, (Sort.__proto__ || Object.getPrototypeOf(Sort)).call(this));
    }

    _createClass(Sort, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    { style: { textAlign: "center" } },
                    this.props.left
                ),
                React.createElement(
                    "h2",
                    { style: { textAlign: "center" } },
                    this.props.right
                )
            );
        }
    }]);

    return Sort;
}(React.Component);
//function Sort(props) {
//    return <div>
//        <h1>This will be sorted {props.left}</h1>
//        <h2>This is sorted: {props.right}</h2>
//        </div>
//}


var domContainer = document.querySelector('#sort_container');
ReactDOM.render(React.createElement(Sort, { left: "HELLO", right: "EHLLO" }), domContainer);