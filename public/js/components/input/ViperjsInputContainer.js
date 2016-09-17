'use strict';
const React = require('react');
const ViperjsInputTextarea = require('./ViperjsInputTextarea.js');
const ViperjsInputStartButton = require('./ViperjsInputStartButton.js');
const ViperjsInputHistoryInputs = require('./ViperjsInputHistoryInputs.js');

class ViperjsInput extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-container',
            },
            React.createElement(ViperjsInputTextarea),
            React.createElement(ViperjsInputStartButton),
            React.createElement(ViperjsInputHistoryInputs)
        );
    }
}
module.exports = ViperjsInput;
