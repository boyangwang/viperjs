'use strict';
const React = require('react');
const ViperjsOutputCurrentTokenized = require('./ViperjsOutputCurrentTokenized.js');
const ViperjsOutputHistoryTokenizeds = require('./ViperjsOutputHistoryTokenizeds.js');
const ViperjsOutputParseButton = require('./ViperjsOutputParseButton.js');

class ViperjsOutputTokenizedContainer extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-tokenized-container',
            },
            React.createElement(ViperjsOutputCurrentTokenized),
            React.createElement(ViperjsOutputHistoryTokenizeds),
            React.createElement(ViperjsOutputParseButton)
        );
    }
}
module.exports = ViperjsOutputTokenizedContainer;
