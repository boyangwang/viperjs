'use strict';
const React = require('react');
const ViperjsInputTextarea = require('./ViperjsInputTextarea.react.js');

class ViperjsInput extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(ViperjsInputTextarea)
        );
    }
}
module.exports = ViperjsInput;
