'use strict';
const React = require('react');
const ViperjsNavbar = require('./ViperjsNavbar.react.js');
const ViperjsInputOutput = require('./ViperjsInputOutput.react.js');

let ViperjsApp = module.exports = React.createClass({
    displayName: 'ViperjsApp',
    render: function() {
        return React.createElement(
            'div', {
                className: 'viperjs-app'
            },
            React.createElement(ViperjsNavbar),
            React.createElement(ViperjsInputOutput)
        );
    }
});
