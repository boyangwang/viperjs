'use strict';
const React = require('react');
const ViperjsNavbar = require('./ViperjsNavbar.js');
const ViperjsInputOutput = require('./ViperjsInputOutput.js');

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
