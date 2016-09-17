'use strict';
const React = require('react');
const ViperjsOutputTokenized = require('./ViperjsOutputTokenized.js');
const ViperjsOutputParseButton = require('./ViperjsOutputParseButton.js');

class ViperjsOutputTokenizedContainer extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-tokenized-container',
            },
            React.createElement(ViperjsOutputTokenized),
            React.createElement(ViperjsOutputParseButton)
        );
    }
}
module.exports = ViperjsOutputTokenizedContainer;
