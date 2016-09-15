'use strict';
const React = require('react');
const ViperjsInput = require('./input/ViperjsInputContainer.react.js');
const ViperjsOutputTokens = require('./output/ViperjsOutputTokenized.react.js');
const ViperjsOutputParsedTrees = require('./output/ViperjsOutputParsed.react.js');

class ViperjsInputOutput extends React.Component {
    render() {
        return React.createElement(
            'div', {
                style: {
                    marginTop: '3.75em',
                },
            },
            React.createElement(ViperjsInput),
            React.createElement(ViperjsOutputTokens),
            React.createElement(ViperjsOutputParsedTrees)
        );
    }
}
module.exports = ViperjsInputOutput;
