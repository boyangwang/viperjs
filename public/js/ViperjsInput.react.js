'use strict';
const React = require('react');
const ReactRedux = require('react-redux');

let ViperjsInput = React.createClass({
    displayName: 'ViperjsInput',
    render: function() {
        return React.createElement(
            'textarea', {
                onChange: (e) => {
                    this.props.dispatch({
                        type: 'input',
                        value: e.target.value
                    });
                }
            });
    }
});
let ViperjsInputConnected = module.exports = ReactRedux.connect()(ViperjsInput);
