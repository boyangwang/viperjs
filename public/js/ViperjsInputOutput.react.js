'use strict';
const React = require('react');
const ViperInput = require('./ViperjsInput.react.js');
const ViperOutputTokens = require('./ViperjsOutputTokenized.react.js');
const ViperOutputParsedTrees = require('./ViperjsOutputParsed.react.js');

class ViperjsInputOutput extends React.Component {
    render() {
        return React.createElement(
            'div', {
                style: {
                    marginTop: '3.75em',
                },
            },
            React.createElement(ViperInput),
            React.createElement(ViperOutputTokens),
            React.createElement(ViperOutputParsedTrees)
        );
    }
}
module.exports = ViperjsInputOutput;
