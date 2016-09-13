'use strict';
const React = require('react');
const ViperjsNavbar = require('./ViperjsNavbar.react.js');

let ViperjsApp = module.exports = React.createClass({
    displayName: 'ViperjsApp',
    render: () => {
        return React.createElement(
            'div', {
                className: 'viperjs-container',
                style: containerStyle,
            },
            React.createElement(ViperjsNavbar, null)
        );
    }
});
