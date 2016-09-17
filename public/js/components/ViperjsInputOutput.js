'use strict';
const React = require('react');
const ViperjsInput = require('./input/ViperjsInputContainer.js');
const ViperjsOutputTokenizedContainer = require('./output/ViperjsOutputTokenizedContainer.js');
const ViperjsOutputParsedContainer = require('./output/ViperjsOutputParsedContainer.js');

class ViperjsInputOutput extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-input-output',
                style: {
                    marginTop: '4.5em',
                },
            },
            React.createElement(ViperjsInput),
            React.createElement(ViperjsOutputTokenizedContainer),
            React.createElement(ViperjsOutputParsedContainer)
        );
    }
}
module.exports = ViperjsInputOutput;
