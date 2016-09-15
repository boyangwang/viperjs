'use strict';
const React = require('react');
const ViperjsNavbar = require('./ViperjsNavbar.react.js');
const ViperjsInputOutput = require('./ViperjsInputOutput.react.js');

class ViperjsApp extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-app',
            },
            React.createElement(ViperjsNavbar),
            React.createElement(ViperjsInputOutput)
        );
    }
}
module.exports = ViperjsApp;
