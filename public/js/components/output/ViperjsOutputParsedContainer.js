'use strict';
const React = require('react');
const ViperjsOutputParsed = require('./ViperjsOutputParsed.js');

class ViperjsOutputParsedContainer extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-parsed-container',
            },
            React.createElement(ViperjsOutputParsed)
        );
    }
}
module.exports = ViperjsOutputParsedContainer;
