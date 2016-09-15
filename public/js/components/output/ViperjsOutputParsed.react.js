'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

class ViperjsOutputParsed extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            JSON.stringify(this.props.outputParsed, null, 2)
        );
    }
}
ViperjsOutputParsed.propTypes = {
    outputParsed: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
    ]),
};
const mapStateToProps = (state) => {
    return {
        outputParsed: state.outputParsed,
    };
};
module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputParsed);
