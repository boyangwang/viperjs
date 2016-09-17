'use strict';
const React = require('react');
const ViperjsOutputTokenized = require('./ViperjsOutputTokenized.js');

class ViperjsOutputTokenizedContainer extends React.Component {
    render() {
        return React.createElement(
            'div', {
                className: 'viperjs-output-tokenized-container',
            },
            React.createElement(ViperjsOutputTokenized)
        );
    }
}
module.exports = ViperjsOutputTokenizedContainer;
