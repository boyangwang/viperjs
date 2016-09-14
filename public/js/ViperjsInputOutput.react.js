'use strict';
const React = require('react');
const ViperInput = require('./ViperjsInput.react.js');
const ViperOutputTokens = require('./ViperjsOutputTokenized.react.js');
const ViperOutputParsedTrees = require('./ViperjsOutputParsed.react.js');

let ViperjsInputOutput = module.exports = React.createClass({
    displayName: 'ViperjsInputOutput',
    render: function() {
        return React.createElement(
            'div', {
                style: {
                    marginTop: '3.75em'
                }
            },
            React.createElement(ViperInput),
            React.createElement(ViperOutputTokens),
            React.createElement(ViperOutputParsedTrees)
        );
    }
});
