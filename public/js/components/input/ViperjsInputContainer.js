'use strict';
const React = require('react');
const ViperjsInputEditor = require('./ViperjsInputEditor.js');
const ViperjsInputTokenizeButton = require('./ViperjsInputTokenizeButton.js');
const ViperjsInputHistoryInputs = require('./ViperjsInputHistoryInputs.js');

class ViperjsInput extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-container',
            },
            React.createElement(ViperjsInputEditor),
            React.createElement(ViperjsInputTokenizeButton),
            React.createElement(ViperjsInputHistoryInputs)
        );
    }
}
module.exports = ViperjsInput;
