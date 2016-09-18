'use strict';
const React = require('react');
const ViperjsOutputCurrentParsed = require('./ViperjsOutputCurrentParsed.js');
const ViperjsOutputHistoryParseds = require('./ViperjsOutputHistoryParseds.js');

class ViperjsOutputParsedContainer extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-parsed-container',
            },
            React.createElement(ViperjsOutputCurrentParsed),
            React.createElement(ViperjsOutputHistoryParseds)
        );
    }
}
module.exports = ViperjsOutputParsedContainer;
