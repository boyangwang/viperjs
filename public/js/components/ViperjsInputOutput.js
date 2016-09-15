'use strict';
const React = require('react');
const ViperjsInput = require('./input/ViperjsInputContainer.js');
const ViperjsOutputTokens = require('./output/ViperjsOutputTokenized.js');
const ViperjsOutputParsedTrees = require('./output/ViperjsOutputParsed.js');

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
