'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

let ViperjsOutputTokenized = React.createClass({
    displayName: 'ViperjsOutputTokenized',
    render: function() {
        return React.createElement(
            'div', {}, JSON.stringify(this.props.inputs, null, 2));
    }
});
let mapStateToProps = (state) => {
    return {
        outputTokenized: state.outputTokenized,
        inputs: state.inputs
    };
};
let ViperjsOutputTokenizedConnected = module.exports = ReactRedux.connect(mapStateToProps)(ViperjsOutputTokenized);
