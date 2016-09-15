'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsOutputParsed extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            JSON.stringify(this.props.inputs, null, 2),
            JSON.stringify(this.props.outputParsed, null, 2)
        );
    }
}
ViperjsOutputParsed.propTypes = {
    inputs: React.PropTypes.arrayOf(React.PropTypes.string),
    outputParsed: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
};
const mapStateToProps = (state) => {
    return {
        outputParsed: state.outputParsed,
        inputs: state.inputs,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputParsed);
