'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsOutputTokenized extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            JSON.stringify(this.props.inputs, null, 2),
            JSON.stringify(this.props.outputTokenized, null, 2)
        );
    }
}
ViperjsOutputTokenized.propTypes = {
    inputs: React.PropTypes.arrayOf(React.PropTypes.string),
    outputTokenized: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
};
const mapStateToProps = (state) => {
    return {
        outputTokenized: state.outputTokenized,
        inputs: state.inputs,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputTokenized);
